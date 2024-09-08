// tokens.js
import jwtDecode from 'jwt-decode';
import { decode } from 'jwt-decode';



const tokens = {
    // Méthode pour récupérer le token depuis sessionStorage
    getAuthenticatedUserToken: () => {
        const token = sessionStorage.getItem("token");
        return token;
    },

    // Méthode pour définir (enregistrer) le token dans sessionStorage
    setAuthenticatedUserToken: (token) => {
        sessionStorage.setItem("token", token);
    },

    // Méthode pour supprimer le token de sessionStorage
    clearAuthenticatedUserToken: () => {
        sessionStorage.removeItem("token");
    },

    // Méthode pour vérifier si un token existe
    isUserAuthenticated: () => {
        return !!sessionStorage.getItem("token");
    },


};

export default tokens;
