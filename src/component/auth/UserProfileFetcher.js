"use client";
import React, { useEffect } from 'react';
import api from "@/lib/axios";
import tokens from "@/lib/tokens";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/../redux/authSlice";
import { useRouter } from 'next/navigation';

const UserProfileFetcher = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = tokens.getAuthenticatedUserToken();

                if (!token) {
                    router.push('/user/signin');
                    return;
                }

                const response = await api.get(`/api/v1/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    dispatch(setUser(response.data));
                }
            } catch (err) {
                console.error('Failed to fetch user data:', err);
            }
        };

        fetchUserData();
    }, [dispatch, router]);

    return null;
};

export default UserProfileFetcher;
