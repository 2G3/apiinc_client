"use client";
import React, {useEffect} from 'react';
import "./globals.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer";
import BackToTopBtn from "@/component/buttons/BackToTopBtn";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/../redux/store";
import { useTokenManager } from "@/lib/hooks/useTokenManager";
import {useRouter} from "next/navigation";
import { Analytics } from "@vercel/analytics/react"

const RootLayout = ({ children }) => {
    const {setupUserActivityListener,handleUserActivity} = useTokenManager();
    const router = useRouter();
    const currentRoute = window.location.pathname;
    // Utilisation du hook pour gérer le token

    useEffect(() => {
        //     const currentRoute = window.location.pathname;
        //
        //     // Validation immédiate du token lors du chargement de la page
        //     setupUserActivityListener(currentRoute);
        //
        // Setup des écouteurs d'événements pour surveiller l'activité utilisateur
        setupUserActivityListener(currentRoute);
        //
        //     // Retirer les écouteurs d'événements lors du démontage du composant
        //     return cleanup;
        //
        //     // setLoading(false);
    }, [setupUserActivityListener]);

    return (
        <>
            <Header />
            {children}
            <Footer />
            <BackToTopBtn />
        </>
    );
};

const App = ({ children }) => (
    <html lang="en">
    <body>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RootLayout>{children}</RootLayout>
        </PersistGate>
    </Provider>
    </body>
    </html>
);

export default App;