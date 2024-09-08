// src/lib/hooks/useTokenManager.js

import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode';
// import axios from 'axios';
import { setAuthenticated, logout } from "@/../redux/authSlice";
import tokens from '@/lib/tokens';
import { useRouter } from "next/navigation";
import { client } from "@/constant/appURI";
import api from "@/lib/axios";

const protectedRoutesPrefix = "/user/my-space/";

/**
 * Custom hook to manage JWT token validation and renewal based on user activity.
 * Ensures that the user's session remains active by renewing tokens before expiration
 * and handles logout and redirection when tokens expire or become invalid.
 */
export const useTokenManager = () => {
    // Retrieve the current access token from Redux store
    const accessToken = useSelector((state) => state.auth.accessToken);
    const dispatch = useDispatch();
    const router = useRouter();

    /**
     * Function to renew the JWT token by making a request to the backend API.
     * If the renewal fails, it logs out the user.
     *
     * @param {string} token - The current JWT token.token
     */
    const renewToken = useCallback((token) => {
        api.get(`/api/auth/verify-token`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => {
            console.log('Token renewed successfully');
            // The new token will be automatically managed by the Axios interceptor.
        }).catch(err => {
            console.error('Error during token renewal:', err);
            // If the token renewal fails, logout the user.
            dispatch(logout());
        });
    }, [dispatch]);

    /**
     * Function to handle token expiration by comparing the current time with the token's expiration time.
     * Logs out the user and redirects them if the token has expired or is about to expire.
     *
     * @param {string} token - The current JWT token.
     * @param {string} pathname - The current route pathname.
     */
    const handleTokenExpiry = useCallback((token, pathname) => {
        const decodedToken = jwtDecode(token); // Decode the JWT to extract its payload.
        const currentTime = Date.now() / 1000; // Current time in seconds since the epoch.

        const timeLeft = decodedToken.exp - currentTime; // Calculate the time left before token expiration.
        if (timeLeft < 0) {
            // If the token has expired, log out the user.
            // dispatch(logout());
            // Check if the current route is a protected route.
            const isProtectedRoute = pathname.startsWith(protectedRoutesPrefix);
            if (isProtectedRoute) {
                // If on a protected route, redirect the user to the login page.
                // router.push(client.client_base_url);
                dispatch(logout());
            } else {
                // For non-protected routes, refresh the page to update the UI accordingly.
                // router.refresh();
                return null;
            }
        } else if (timeLeft < 150) {
            // If the token will expire in less than 5 minutes, renew the token.
            renewToken(token);
        }
    }, [dispatch, renewToken]);

    /**
     * Function to handle user activity by verifying and renewing the JWT token if necessary.
     * This function is triggered on specific user interactions (e.g., key presses, clicks).
     *
     * @param {string} pathname - The current route pathname.
     */
    const handleUserActivity = useCallback((pathname) => {
        // console.log(pathname)
        const token = tokens.getAuthenticatedUserToken(); // Retrieve the token from session storage.

        if (token) {

            // Proceed only if the token in storage matches the one in Redux store.
            handleTokenExpiry(token, pathname); // Handle token expiration based on current state.


        }else {
            // console.error("no token")
            const isProtectedRoute = pathname.startsWith(protectedRoutesPrefix);
                if (isProtectedRoute){
                    dispatch(logout());
                }else {
                    // router.refresh();
                    return null;
                }
        }
    }, [handleTokenExpiry, dispatch]);

    /**
     * Function to set up event listeners that trigger `handleUserActivity` on user interactions.
     * This ensures that the token is verified and renewed based on user activity.
     *
     * @param {string} pathname - The current route pathname.
     */
    const setupUserActivityListener = useCallback((pathname) => {
        // console.log(pathname)
        const eventTypes = ['mousemove', 'click',]; // Specify the events to listen for.

        // Attach event listeners to monitor user activity.
        const handleActivity = () => handleUserActivity(pathname);
        eventTypes.forEach((event) => window.addEventListener(event, handleActivity));

        // Return a cleanup function to remove the event listeners when the component unmounts.
        return () => {
            eventTypes.forEach((event) => window.removeEventListener(event, handleActivity));
        };
    }, [handleUserActivity]);

    // Return the `setupUserActivityListener` function for use in components.
    return { setupUserActivityListener,handleUserActivity };
};
