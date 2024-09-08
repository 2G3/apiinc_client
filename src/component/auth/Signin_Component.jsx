"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync,setError } from "@/../redux/authSlice";
import LoadingComponent from "@/component/LoadingComponent";
import SigninErrorAlert from "@/component/auth/SigninErrorAlert";
import {client} from "@/constant/appURI"

export default function SigninComponent() {
    const router = useRouter();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);  // Récupère l'état de chargement depuis le store
    const error = useSelector((state) => state.auth.error);  // Récupère les erreurs depuis le store
    const [credentials, setCredentials] = useState({ name: "ibo.barrd@hotmail.com", password: "securepassword123" });  // Stocke temporairement les informations d'identification


    // Mettre à jour l'erreur en utilisant dispatch
    const handleError = (newError) => {
        dispatch(setError(newError));
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        let valid = true;

        // console.log("signin", valid)
        // Validation des champs de saisie
        if (credentials.name === "" || credentials.password === "") {
            setError("Veuillez remplir tous les champs.");
            valid = false;
        }

        if (!valid) {
            return;
        }

        const headers = {
            'Content-Type': 'application/json',
        };

        try {
            const response = await dispatch(loginAsync({ credentials, headers })).unwrap();
            // console.log("signup :", response)
            if (response) {
                const token = response.accessToken;
                sessionStorage.setItem('token', token);
                router.push(client.client_user_home_url); // Redirige vers la page d'accueil
            }
        } catch (err) {
            handleError(err.message || "Nom d'utilisateur ou mot de passe incorrect !");
        }
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {loading ? (
                <LoadingComponent />
            ) : (
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-28 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Connectez-vous à votre espace
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {error && (
                            <SigninErrorAlert error={error}/>
                        )}
                        <form className="space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Adresse mail
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="name"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="email"
                                        required
                                        value={credentials.name}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Mot de passe
                                    </label>
                                    <div className="text-sm">
                                        <Link href="/user/signin/forgot-password"
                                              className="font-semibold text-[#152542] hover:text-blue-950">
                                            Mot de passe oublié?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder="mot de passe"
                                        required
                                        value={credentials.password}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 
                                text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2
                                focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                                ${credentials.name === "" || credentials.password === "" || loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-950"}`}
                                    disabled={credentials.name === "" || credentials.password === "" || loading}
                                >
                                    Se connecter
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Pas de compte?{' '}
                            <Link href="/user/signup"
                                  className="font-semibold leading-6 text-[#152542] hover:text-blue-950">
                                Créer un compte
                            </Link>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
