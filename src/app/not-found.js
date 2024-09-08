// src/app/not-found.js
"use client";
import Link from 'next/link';

export default function Custom404() {
    return (
        <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="container text-center px-6 py-12 mx-auto">
                <p className="text-sm font-medium text-blue-500 dark:text-blue-400">Erreur 404</p>
                <h1 className="mt-3 text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">Page non trouvée</h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.</p>

                <div className="flex justify-center items-center mt-8 gap-x-4">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                        </svg>
                        <span>Retour</span>
                    </button>

                    <Link href="/">
                        <span className="px-5 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                            Accueil
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}