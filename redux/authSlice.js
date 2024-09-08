import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import {client} from "@/constant/appURI";

const initialState = {
    user: null,
    permissions: null,
    isAuthenticated: false,  // Indique si l'utilisateur est authentifié
    accessToken: null,  // Stocke le token JWT
    loading: false,  // Statut de chargement
    error: null,  // Message d'erreur
};

// Async thunk pour gérer la connexion, récupérer le token et les informations utilisateur
export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({ credentials, headers }, thunkAPI) => {
        try {
            console.log("auth", credentials)
            // Authentification de l'utilisateur
            const authResponse = await api.post('/api/auth/login', {
                username: credentials.name,
                password: credentials.password,
            }, {
                headers: headers,
            });

            console.log("authResponse",authResponse)
            // Vérifier si le token est présent
            if (authResponse.data && authResponse.data.accessToken) {
                const token = authResponse.data.accessToken;

                // Récupérer les informations utilisateur avec le token
                const userResponse = await api.get('/api/v1/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (userResponse.data){
                    try {
                        const permissions = await api.get('/api/v1/user/permissions', {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                        // console.log(permissions);
                        return {
                            accessToken: token,
                            user: userResponse.data,
                            permissions: permissions.data  // Ajoutez les permissions à l'état
                        };
                    } catch (err) {
                        console.error('Failed to fetch permissions:', err);
                        return thunkAPI.rejectWithValue('Failed to fetch permissions');
                    }
                } else {
                    return thunkAPI.rejectWithValue('No user data');
                }

                // Retourner les données nécessaires
                // return {
                //             accessToken: token,
                //             user: userResponse.data
                //         };
            } else {
                return thunkAPI.rejectWithValue('Token is missing in the response');
            }
        } catch (err) {
            return thunkAPI.rejectWithValue('Echec de connexion, veuillez réessayer !');
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
            state.accessToken = null;
            state.user = null;  // Réinitialiser l'utilisateur lors de la déconnexion
            state.permissions = null;
            sessionStorage.removeItem("token");
            window.location.href = client.client_base_url;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setAuthenticated(state, action) {
            state.isAuthenticated = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.accessToken = action.payload.accessToken;
                state.user = action.payload.user;  // Mettre à jour l'utilisateur avec les données récupérées
                state.permissions = action.payload.permissions
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload || action.error.message || 'Failed to login';
            });
    },
});

export const { logout, setError, setAuthenticated, setUser } = authSlice.actions;
export default authSlice.reducer;
