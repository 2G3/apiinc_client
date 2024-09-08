"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const visaTypes = [
    {
        title: "Visa de Visiteur",
        description: "Nécessaire pour les séjours temporaires au Canada en tant que touriste.",
        icon: "visitor-visa-icon.svg",
        slug: "visa-de-visiteur"
    },
    {
        title: "Visa d'Étudiant",
        description: "Requis pour les étudiants internationaux souhaitant étudier au Canada.",
        icon: "student-visa-icon.svg",
        slug: "visa-detudiant"
    },
    {
        title: "Visa de Travail",
        description: "Pour ceux qui souhaitent travailler au Canada de façon temporaire.",
        icon: "work-visa-icon.svg",
        slug: "visa-de-travail"
    },
    {
        title: "Visa de Résidence Permanente",
        description: "Pour ceux qui souhaitent s'établir de façon permanente au Canada.",
        icon: "permanent-residence-visa-icon.svg",
        slug: "visa-de-residence-permanente"
    },
    {
        title: "Visa d'Immigrant d'Affaires",
        description: "Pour les entrepreneurs et investisseurs souhaitant immigrer au Canada.",
        icon: "business-immigrant-visa-icon.svg",
        slug: "visa-dimmigrant-daffaires"
    },
    {
        title: "Programme Entrée Express",
        description: "Pour les professionnels qualifiés utilisant le système Entrée Express.",
        icon: "express-entry-visa-icon.svg",
        slug: "programme-entree-express"
    }
];

const AreaOfPractice = () => {
    const router = useRouter();
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    
    
    



    return (
        <div className="bg-[#162542]" id={""}>
            <h2 className="pt-20 text-center text-2xl text-[#C0B596] poppins-extralight capitalize">domaine de pratique</h2>
            <div className="flex flex-col items-center">
                <h1 className="bar relative text-center text-white text-5xl mt-4 playfair-display-thin font-thin tracking-widest capitalize">
                    Comment vous aider ?
                </h1>
            </div>
            <div>
                <div className="flex flex-wrap justify-center px-4 py-8 md:px-12 md:py-24">
                    {visaTypes.map((visaType, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col w-full sm:w-1/2 lg:w-1/4 mx-2 my-4 cursor-pointer"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            onClick={() => handleClick(visaType.slug)}
                        >
                            <div className="flex flex-row justify-center items-center w-[4rem] h-[4rem] border-[1px] border-gray-400 rounded-full mx-auto">
                                <div className="flex flex-row justify-center items-center w-full h-full">
                                    <div className="flex flex-row justify-center items-center w-1/2 h-[50%] bg-white rounded-full">
                                        <div className="w-[90%] h-[90%] bg-[#162542] rounded-full"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center text-center">
                                <h2 className="text-[#C0B596] text-xl md:text-2xl playfair-display-p0 mt-4">
                                    {visaType.title}
                                </h2>
                                <p className="text-gray-300 text-base md:text-lg poppins-extralight capitalize mt-2 mb-4">
                                    {visaType.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AreaOfPractice;