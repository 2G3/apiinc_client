
"use client";
import React, { useState } from 'react';
import axios from "axios";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const SuscribeToNewsLetter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await axios.post(`${apiUrl}/api/newsletter/subscribe`,
                { email: email },  // Les données du corps de la requête
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // withCredentials: true  // Inclure les informations d'authentification si nécessaire
                }
            );


            console.log(response)
            if (response.ok) {
                setMessage('Abonnement réussi');
                setIsSuccess(true);
            } else {
                setMessage('Une erreur est survenue. Veuillez réessayer.');
                setIsSuccess(false);
            }
        } catch (error) {
            setMessage('Une erreur est survenue. Veuillez réessayer.');
            setIsSuccess(false);
        }

    };

    return (
        <div className="bg-[#F8F8F8] py-12 p-0 md:px-6 lg:px-24 flex flex-col items-center text-center border-t-[5px] border-t-gray-900">
            <div className="bg-gray-800 -mt-40 md:px-12 py-5">
                <h2 className="text-3xl text-white font-semibold mb-4 playfair-display-p0">
                    {isSuccess ? 'Abonnement réussi!' : 'Abonnez-vous à notre Newsletter'}
                </h2>
                <p className="text-gray-300 mb-8 poppins-extralight-italic">
                    {isSuccess
                        ? 'Merci de vous être abonné à notre newsletter. Vous recevrez bientôt des mises à jour dans votre boîte de réception.'
                        : 'Recevez les dernières nouvelles et mises à jour directement dans votre boîte de réception.'}
                </p>
                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                            <span className="text-white text-3xl">✔</span>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Entrez votre adresse email"
                            className={`w-full md:w-[40rem] md:max-w-md p-3 border border-gray-300 rounded-sm mb-4 m-auto`}
                            required
                        />
                        <button
                            type="submit"
                            className="w-fit max-w-xs bg-[#C0B596] text-white text-lg tracking-wider py-3 px-8 hover:bg-[#a89b76] transition duration-300"
                        >
                            S&apos;abonner
                        </button>
                    </form>
                )}
                {message && !isSuccess && <p className="text-red-500 mt-4">{message}</p>}
            </div>
        </div>
    );
};

export default SuscribeToNewsLetter;
