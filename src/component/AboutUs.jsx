'use client';
import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';
import {useRouter} from "next/navigation";
import Image from "next/image";
import {client} from "@/constant/appURI";

const AboutUs = () => {
    const router = useRouter();
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };


    return (
        <motion.div
            className="w-full flex flex-col md:flex-row px-4 py-24 md:p-32 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div
                className="relative w-full md:w-[50%] min-w-[40%] h-[20rem] md:h-[30rem] bg-[#C0B596] p-2 md:p-4 mb-4 md:mb-0"
                variants={containerVariants}
            >
                <div className="absolute left-2 md:left-5 top-2 md:top-4 w-full h-full bg-white">
                    <Image
                        src="/photo_aboutUs.png"
                        alt="About Us"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                    />
                </div>
            </motion.div>
            <motion.div
                className="px-4 md:px-12 mt-4 md:mt-16 flex flex-col"
                variants={containerVariants}
            >
                <h2 className="text-2xl md:text-4xl text-black mb-2 md:mb-4 playfair-display-p0 capitalize">Qui
                    sommes-nous ?</h2>
                <p className="text-gray-500 mb-2 poppins-extralight-italic">
                    Bienvenue sur API, où nous vous guidons et vous accompagnons à chaque
                    étape de votre projet pour un avenir meilleur.
                </p>

                <p className="text-gray-500 mt-2 md:mt-4 mb-2 poppins-extralight-italic">
                    Notre équipe d&apos;experts est dédiée à faciliter votre démarche d&apos;immigration, avec un engagement
                    constant envers votre réussite et votre intégration.
                </p>

                <Link href={client.client_aboutUs_url}
                      className="w-fit md:w-fit mt-4 md:mt-8 px-4 md:px-8 py-6 md:py-4 bg-[#C0B596] text-white text-lg md:text-xl poppins-extralight-italic"
                >
                    Plus à propos de nous...
                </Link>
                <Image src="/signature2.png" alt=""
                       className="mt-4 md:mt-8 w-[150px] md:w-[300px] h-[50px] md:h-[100px] object-cover"
                       width={300}
                          height={100}
                />
            </motion.div>
        </motion.div>
    );
};

export default AboutUs;