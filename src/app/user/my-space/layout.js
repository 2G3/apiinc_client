"use client";

import React, {useEffect, useState} from 'react';
import {useTokenManager} from "@/lib/hooks/useTokenManager";


const Layout = ({ children }) => {
    const { setupUserActivityListener,handleUserActivity } = useTokenManager();


    useEffect(() => {
        const currentRoute = window.location.pathname;

        // Validation immédiate du token lors du chargement de la page
        setupUserActivityListener(currentRoute);

        // Setup des écouteurs d'événements pour surveiller l'activité utilisateur
        // Retirer les écouteurs d'événements lors du démontage du composant
        return setupUserActivityListener(currentRoute);

        // setLoading(false);
    }, [setupUserActivityListener]);




    return <>{children}</>;
};

export default Layout;
