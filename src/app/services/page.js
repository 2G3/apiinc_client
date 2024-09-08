"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const visaTypes = [
    {
        title: "Visa de Visiteur",
        description: "Nécessaire pour les séjours temporaires au Canada en tant que touriste.",
        icon: "fas fa-plane",
        slug: "visa-de-visiteur"
    },
    {
        title: "Visa d'Étudiant",
        description: "Requis pour les étudiants internationaux souhaitant étudier au Canada.",
        icon: "fas fa-graduation-cap",
        slug: "visa-detudiant"
    },
    {
        title: "Visa de Travail",
        description: "Pour ceux qui souhaitent travailler au Canada de façon temporaire.",
        icon: "fas fa-briefcase",
        slug: "visa-de-travail"
    },
    {
        title: "Visa de Résidence Permanente",
        description: "Pour ceux qui souhaitent s'établir de façon permanente au Canada.",
        icon: "fas fa-home",
        slug: "visa-de-residence-permanente"
    },
    {
        title: "Visa d'Immigrant d'Affaires",
        description: "Pour les entrepreneurs et investisseurs souhaitant immigrer au Canada.",
        icon: "fas fa-business-time",
        slug: "visa-dimmigrant-daffaires"
    },
    {
        title: "Programme Entrée Express",
        description: "Pour les professionnels qualifiés utilisant le système Entrée Express.",
        icon: "fas fa-route",
        slug: "programme-entree-express"
    }
];

const ServicesPage = () => {
    const router = useRouter();

    const handleClick = (slug) => {
        router.push(`/services/${slug}`);
    };

    return (
        <div className="bg-white">
            <header className="relative bg-[#162542]">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-white playfair-display-thin">Nos Services</h1>
                    <p className="mt-6 text-lg text-[#C0B596] poppins-extralight-italic">Découvrez comment nous pouvons vous aider à atteindre vos objectifs au Canada.</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visaTypes.map((visaType, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#C0B596] p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                            onClick={() => handleClick(visaType.slug)}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
                            }}
                        >
                            <div className="flex justify-center items-center mb-4">
                                <i className={`${visaType.icon} text-5xl text-[#162542]`}></i>
                            </div>
                            <h2 className="text-2xl font-semibold text-[#162542] mb-2 text-center playfair-display-thin">{visaType.title}</h2>
                            <p className="text-white text-center poppins-extralight-italic">{visaType.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;