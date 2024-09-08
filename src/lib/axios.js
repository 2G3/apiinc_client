// lib/axios.js
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
        return response;
    },
    (error) => {
        // Gestion centralisée des erreurs
        return handleError(error);
    }
);

// Fonction de gestion des erreurs centralisée
function handleError(error) {
    if (error.code && error.code.includes('ERR_NETWORK')) {
        handleNetworkError();
    } else if (error.response) {
        return handleServerError(error.response);
    } else if (error.request) {
        handleNoResponseError();
    } else {
        handleGenericError();
    }

    return Promise.reject(error);
}

// Gestion des erreurs réseau
function handleNetworkError() {
    const tempToken = uuidv4();
    Cookies.set('tempToken', tempToken, { secure: true, sameSite: 'Strict' });
    window.location.href = `/${tempToken}`;
}

// Gestion des erreurs serveur
function handleServerError(response) {
    console.log(response)
    if (response.status === 401) {
        sessionStorage.removeItem('token');
        window.location.href = client.client_login_url; // Redirige vers la page de connexion
    } else if (response.status === 500) {
        // alert("Une erreur s'est produite. Veuillez réessayer plus tard !");
        return null;
    } else {
        alert(response.data.message || response.statusText);
    }

    return response; // Important pour gérer correctement la suite de la promesse
}

// Gestion des erreurs sans réponse du serveur
function handleNoResponseError() {
    alert('Pas de réponse du serveur. Veuillez réessayer plus tard.');
}

// Gestion des erreurs génériques
function handleGenericError() {
    alert('Une erreur est survenue. Veuillez réessayer.');
}

export default api;
