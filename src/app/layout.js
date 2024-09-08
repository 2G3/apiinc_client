"use client";
import React from 'react';
import "./globals.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer";
import BackToTopBtn from "@/component/buttons/BackToTopBtn";

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
        <body>
        <Header />
        {children}
        <Footer />
        <BackToTopBtn />
        </body>
        </html>
    );
};

export default RootLayout;