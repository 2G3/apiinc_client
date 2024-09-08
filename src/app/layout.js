"use client";
import React from 'react';
import "./globals.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer";
import BackToTopBtn from "@/component/buttons/BackToTopBtn";
import { Analytics } from "@vercel/analytics/react"

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/faviconnew.ico"/>
            <title>API.inc | Accueil</title>
        </head>
        <body>
        <Header/>
        {children}
        <Footer/>
        <BackToTopBtn/>
        </body>
        </html>
    );
};

export default RootLayout;