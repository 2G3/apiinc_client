"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StartSubmissionButton from "@/component/Hero_section/StartSubmissionButton";



const Carousel = () => {
    const images = [
        { url: '/family-img.png', title: 'Votre Partenaire', title_2: 'de Confiance', subtitle: 'Consultant en immigration' },
        { url: '/student-img.png', title: 'Expertise et Accompagnement Personnalisé', subtitle: 'Nous vous guidons à chaque étape pour vous installer au Canada' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const containerVariants = {
        enter: {
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: "easeIn"
            }
        },
        center: {
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: "easeIn"
            }
        }
    };

    const h1Variants = {
        enter: {
            y: -20,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        },
        center: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            y: 20,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    };

    const h2Variants = {
        enter: {
            y: 20,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        },
        center: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            y: -20,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-[84vh] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    variants={containerVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[currentIndex].url})` }}
                >
                    <div className="flex flex-col justify-end h-full px-2  md:px-32 lg:px-48 py-8">
                        <motion.h2
                            className="text-white  text-xl md:text-2xl mb-2 sm:mb-4 poppins-extralight-italic tracking-widest"
                            variants={h2Variants}
                        >
                            {images[currentIndex].subtitle}
                        </motion.h2>

                        <motion.h1
                            className="text-white text-6xl md:text-6xl lg:text-7xl mb-2 sm:mb-4 righteous-regular tracking-widest sm:font-extrabold"
                            variants={h1Variants}
                        >
                            {images[currentIndex].title}
                        </motion.h1>
                        <motion.h1
                            className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-4 righteous-regular tracking-widest sm:font-extrabold"
                            variants={h1Variants}
                        >
                            {images[currentIndex].title_2}
                        </motion.h1>

                        <StartSubmissionButton/>
                    </div>
                </motion.div>
            </AnimatePresence>

            {}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button
                    onClick={prevSlide}
                    className="border-[1px] border-white text-white p-2 sm:p-4 rounded-lg ml-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button
                    onClick={nextSlide}
                    className="border-[1px] border-white text-white p-2 sm:p-4 rounded-lg mr-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;