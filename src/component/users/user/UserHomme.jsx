import React, {useState} from 'react';
import Link from "next/link";
import {useSelector} from "react-redux";

const UserHomme = () => {
    const user = useSelector((state) => state.auth.user)
    const isFormSuccessfullySubmit =true; //temporary after form submit
    const [demandState,setDemandState] =useState("") //TODO: will come from DB if a demand is submitted
    const isDemandHasSubmitted = "" // TODO: If there's a demande, Demande come from db with all necessary info
    return (
        <div className="min-h-[100vh] bg-gray-50 flex flex-col">
            <h2>
                <span className="text-2xl font-semibold text-[#162542] playfair-display-p0">Bonjour {user.firstName},</span>
                <p className="text-gray-600 poppins-extralight-italic text-xs">
                    {new Date().toLocaleDateString("fr-FR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}
                </p>
            </h2>
            {isFormSuccessfullySubmit && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                    <p className="font-bold">
                        Le formulaire de demande de consultation de dossier a été soumis avec succès.
                    </p>
                    <p>
                        Vous pouvez suivre l&apos;avancement de votre demande dans la section &quot;Ma demande&quot;.
                    </p>
                    <p>Merci d&apos;avoir soumis le formulaire.</p>
                </div>
            )}
            <main className="flex-grow p-6 space-y-8">
                <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    {isDemandHasSubmitted ? (
                        <div>
                            <h2 className="text-2xl font-semibold text-[#162542] playfair-display-p0">Ma demande</h2>
                            <p className="mt-4 text-gray-600">Consultez l&apos;état de vos demandes.</p>
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-[#162542]">{"Demande de parrainage"}</h3>
                                <p className="text-gray-600">Numéro de demande: {"B008-892784"}</p>
                                <p className="text-gray-600">Date de la demande: {"24 aout 2024"}</p>
                                <p className="text-gray-600">Statut de la demande: {"demande en traitement"}</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-2xl font-semibold text-[#162542] playfair-display-p0">Demande de
                                consultation de dossier</h2>
                            <p className="mt-4 text-gray-600">Informations et formulaires relatifs au parrainage.</p>
                            <Link
                                href="/user/mon-espace/johnDoe/123e4567-e89b-12d3-a456-426614174000/demandes/commencer-une-demande">
                                <button
                                    className="mt-6 px-4 py-2 bg-[#C0B596] text-white rounded-md hover:bg-[#a89976] transition-colors duration-300">
                                    Remplir le formulaire
                                </button>
                            </Link>
                        </>
                    )}
                </section>

                {demandState === "acceptedForNextStep" && (
                    <section
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold text-[#162542]">Formulaires</h2>
                        <p className="mt-4 text-gray-600">Liste des formulaires à remplir pour vos demandes.</p>
                        <Link href="/formulaires">
                            <button
                                className="mt-6 px-4 py-2 bg-[#C0B596] text-white rounded-md hover:bg-[#a89976] transition-colors duration-300">
                                Voir les formulaires
                            </button>
                        </Link>
                    </section>
                )}

                <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-2xl font-semibold text-[#162542] playfair-display-p0">Informations Utiles</h2>
                    <p className="mt-4 text-gray-600">Consultez les informations utiles pour votre processus de
                        demande.</p>
                    <Link href="/informations-utiles">
                        <button
                            className="mt-6 px-4 py-2 bg-[#C0B596] text-white rounded-md hover:bg-[#a89976] transition-colors duration-300">
                            En savoir plus
                        </button>
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default UserHomme;