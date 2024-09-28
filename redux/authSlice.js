import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import { client } from "@/constant/appURI";

// État initial de l'authentification
const initialState = {
    user: null,  // Stocke les informations utilisateur après connexion
    permissions: null,  // Stocke les permissions utilisateur
    isAuthenticated: false,  // Indique si l'utilisateur est authentifié
    accessToken: null,  // Stocke le token JWT pour les requêtes authentifiées
    loading: false,  // Indicateur de chargement (utilisé pendant les appels API)
    error: null,  // Stocke les messages d'erreur si une action échoue
};

// Thunk asynchrone pour gérer la connexion utilisateur
// Ce thunk effectue l'authentification, récupère le token et les informations utilisateur
export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({ credentials, headers }, thunkAPI) => {
        try {
            const authResponse = await api.post('/api/auth/login', {
                username: credentials.name,
                password: credentials.password,
            }, {
                headers: headers,
            });

            // Vérifier si le token est présent
            if (authResponse.data && authResponse.data.accessToken) {
                const token = authResponse.data.accessToken;

                // Récupération des informations utilisateur
                const userResponse = await api.get('/api/v1/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Vérification des données utilisateur
                if (userResponse.data) {
                    // Récupération des permissions
                    const permissionsResponse = await api.get('/api/v1/user/permissions', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    return {
                        accessToken: token,
                        user: userResponse.data,
                        permissions: permissionsResponse.data
                    };
                } else {
                    return thunkAPI.rejectWithValue('Impossible de récupérer les données utilisateur.');
                }
            } else {
                return thunkAPI.rejectWithValue("Échec de connexion, veuillez réessayer ! Si le problème persiste, communiquez avec nous.");
            }
        } catch (err) {
            // Gestion des erreurs Axios
            if (err.isNetworkError) {
                // Erreur réseau (serveur injoignable)
                return thunkAPI.rejectWithValue('Le serveur est injoignable. Veuillez vérifier votre connexion internet.');
            } else if (err.response) {
                // Erreur HTTP renvoyée par le serveur
                if (err.response.status === 403) {
                    return thunkAPI.rejectWithValue(err.response.data.message || 'Compte non activé.');
                } else if (err.response.status === 401) {
                    return thunkAPI.rejectWithValue(err.response.data.message || 'Identifiants incorrects.');
                } else if (err.response.status === 500) {
                    return thunkAPI.rejectWithValue('Erreur interne du serveur. Veuillez réessayer plus tard.');
                } else {
                    return thunkAPI.rejectWithValue(err.response.data.message || 'Une erreur est survenue.');
                }
            } else {
                // Autres erreurs
                return thunkAPI.rejectWithValue('Une erreur est survenue. Veuillez réessayer.');
            }
        }
    }
);



// Définition du slice pour l'authentification
const authSlice = createSlice({
    name: "auth",  // Nom du slice
    initialState,  // Utilisation de l'état initial défini plus haut
    reducers: {
        // Action pour déconnecter l'utilisateur
        logout(state) {
            state.isAuthenticated = false;  // Marquer l'utilisateur comme non authentifié
            state.accessToken = null;  // Supprimer le token JWT
            state.user = null;  // Réinitialiser les informations utilisateur
            state.permissions = null;  // Réinitialiser les permissions utilisateur
            sessionStorage.removeItem("token");  // Supprimer le token du sessionStorage
            window.location.href = client.client_base_url;  // Rediriger vers la page d'accueil après déconnexion
        },
        // Action pour définir un message d'erreur personnalisé
        setError(state, action) {
            state.error = action.payload;  // Stocker le message d'erreur
        },
        // Action pour définir l'état d'authentification
        setAuthenticated(state, action) {
            state.isAuthenticated = action.payload;  // Mettre à jour l'état d'authentification
        },
        // Action pour définir les informations utilisateur
        setUser(state, action) {
            state.user = action.payload;  // Mettre à jour les informations utilisateur
        },
    },
    extraReducers: (builder) => {
        // Gérer les différents états du thunk asynchrone loginAsync
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;  // Marquer l'état de chargement comme actif
                state.error = null;  // Réinitialiser l'erreur lorsqu'une nouvelle tentative de connexion est faite
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = false;  // Désactiver l'état de chargement
                state.isAuthenticated = true;  // Marquer l'utilisateur comme authentifié
                state.accessToken = action.payload.accessToken;  // Stocker le token JWT
                state.user = action.payload.user;  // Mettre à jour les informations utilisateur
                state.permissions = action.payload.permissions;  // Mettre à jour les permissions utilisateur

            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false;  // Désactiver l'état de chargement
                state.isAuthenticated = false;  // Marquer l'utilisateur comme non authentifié
                state.error = action.payload || action.error.message || 'Failed to login';  // Stocker le message d'erreur
            });
    },
});

// Exporter les actions et le reducer du slice auth pour les utiliser dans l'application
export const { logout, setError, setAuthenticated, setUser } = authSlice.actions;
export default authSlice.reducer;
