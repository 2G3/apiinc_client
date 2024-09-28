import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';
import { client } from "@/constant/appURI";
import tokens from "@/lib/tokens";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Intercepteur de réponse pour gérer le rafraîchissement du token
api.interceptors.response.use(
    (response) => {
        const newToken = response.headers['new-token'];
        if (newToken) {
            console.log("have a new token here")
            sessionStorage.setItem('token', newToken);
        }
        console.log(response)
        return response;
    },
    (error) => {

        // Vérifiez si c'est une erreur réseau
        if (error.code && error.code.includes('ERR_NETWORK')) {
            // Ajoutez un indicateur spécifique à l'erreur
            error.isNetworkError = true;
        }
        // Rejetez l'erreur pour que le code appelant puisse la gérer
        return Promise.reject(error);
    }
);

export default api;
