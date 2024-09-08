"use client";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";

const faqs = {
    "Visa de Visiteur": [
        { question: "Qu'est-ce qu'un visa de visiteur?", answer: "Un visa de visiteur permet de séjourner temporairement au Canada pour des motifs tels que le tourisme ou la visite de proches." },
        { question: "Quelle est la durée d'un visa de visiteur?", answer: "La durée de séjour avec un visa de visiteur est déterminée à l'arrivée par les services frontaliers, généralement jusqu'à six mois." },
        { question: "Est-il possible de prolonger un visa de visiteur?", answer: "Oui, il est possible de demander une prolongation avant l'expiration du visa actuel." },
        { question: "Quels sont les coûts associés à un visa de visiteur?", answer: "Il y a des frais de traitement pour la demande de visa de visiteur, ainsi que des frais additionnels potentiels pour des services comme la biométrie." },
        { question: "Quels sont les droits d'un détenteur de visa de visiteur?", answer: "Les détenteurs d'un visa de visiteur peuvent voyager librement au Canada, mais ils ne sont pas autorisés à travailler ou à étudier." }
    ],
    "Visa d'Étudiant": [
        { question: "Qu'est-ce qu'un visa d'étudiant?", answer: "Un visa d'étudiant permet aux étudiants internationaux de poursuivre des études à temps plein dans des établissements désignés au Canada." },
        { question: "Peut-on travailler avec un visa d'étudiant?", answer: "Les étudiants internationaux peuvent travailler à temps partiel pendant les périodes de cours et à temps plein pendant les vacances scolaires." },
        { question: "Quels sont les critères pour obtenir un visa d'étudiant?", answer: "Il faut une lettre d'acceptation d'un établissement désigné, une preuve de fonds suffisants, et un passeport valide." },
        { question: "Les membres de la famille peuvent-ils accompagner l'étudiant?", answer: "Oui, les conjoints peuvent demander un permis de travail ouvert et les enfants peuvent obtenir un permis d'études ou un visa de visiteur." },
        { question: "Quelle est la durée de validité d'un visa d'étudiant?", answer: "La durée de validité correspond généralement à celle du programme d'études, plus 90 jours supplémentaires." }
    ],
    "Visa de Travail": [
        { question: "Qu'est-ce qu'un permis de travail?", answer: "Un permis de travail permet aux étrangers de travailler temporairement au Canada." },
        { question: "Quels types de permis de travail existent?", answer: "Il existe des permis de travail ouverts et fermés. Les permis ouverts permettent de travailler pour n'importe quel employeur, tandis que les permis fermés sont liés à un employeur spécifique." },
        { question: "Peut-on changer d'emploi avec un permis de travail?", answer: "Cela dépend du type de permis. Les détenteurs de permis ouverts peuvent changer d'emploi, mais ceux avec des permis fermés doivent obtenir un nouveau permis pour changer d'employeur." },
        { question: "Quels sont les frais pour un permis de travail?", answer: "Il y a des frais de traitement pour obtenir un permis de travail, ainsi que des frais additionnels pour des services comme la biométrie." },
        { question: "Les détenteurs de permis de travail peuvent-ils étudier?", answer: "Ils peuvent suivre des cours informels, mais pour des programmes d'études formels, un permis d'études est nécessaire." }
    ],
    "Visa de Résidence Permanente": [
        { question: "Qu'est-ce que la résidence permanente?", answer: "La résidence permanente permet aux étrangers de vivre et de travailler au Canada indéfiniment." },
        { question: "Quels sont les critères pour la résidence permanente?", answer: "Les critères varient selon le programme, incluant des facteurs comme l'âge, l'éducation, l'expérience de travail, et la maîtrise des langues officielles." },
        { question: "Combien de temps prend le processus de résidence permanente?", answer: "Le temps de traitement varie selon le programme et la charge de travail des bureaux de traitement." },
        { question: "La famille peut-elle être incluse dans la demande de résidence permanente?", answer: "Oui, les conjoints et les enfants à charge peuvent être inclus dans la demande." },
        { question: "Quels sont les avantages de la résidence permanente?", answer: "Les résidents permanents peuvent vivre et travailler partout au Canada, accéder à la plupart des prestations sociales, et demander la citoyenneté canadienne après une période de résidence continue." }
    ]
};


const FAQPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(Object.keys(faqs)[0]);

    return (
        <div>
            <div className="relative bg-[#162542]">
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-8 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-white text-center">FAQ</h1>
                    <p className="mt-6 text-lg text-[#C0B596] text-center max-w-3xl mx-auto">
                        Retrouvez les réponses à vos questions par catégorie.
                    </p>
                </div>
            </div>
            <div className="min-h-screen flex flex-col lg:flex-row">
                {/* Sidebar for large screens */}
                <div
                    className="hidden lg:block lg:w-1/4 bg-white shadow-lg fixed lg:sticky top-0 h-screen overflow-y-auto">
                    <div className="py-6 px-4">
                        <h2 className="text-2xl font-semibold mb-4 playfair-display-p0">Catégories</h2>
                        <div className="space-y-2">
                            {Object.keys(faqs).map((category) => (
                                <button
                                    key={category}
                                    className={`block playfair-display-p0 w-full text-left px-4 py-2 text-normal font-medium ${selectedCategory === category ? 'bg-[#C0B596] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dropdown for mobile screens */}
                <div className="block lg:hidden p-4">
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-lg"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {Object.keys(faqs).map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="lg:ml-1/4 flex-1  bg-gray-50 overflow-y-auto">
                    {/*<header className="bg-[#162542]">*/}
                    {/*    <div className="max-w-7xl mx-auto py-2 px-4 sm:py-24 sm:px-6 lg:px-8">*/}
                    {/*        <h1 className="text-4xl font-extrabold text-white text-center">FAQ</h1>*/}
                    {/*        <p className="mt-6 text-lg text-[#C0B596] text-center">Retrouvez les réponses à vos questions*/}
                    {/*            par catégorie.</p>*/}
                    {/*    </div>*/}
                    {/*</header>*/}
                    <div className="space-y-6 px-2 md:px-16 pt-8">
                        {faqs[selectedCategory].map((faq, index) => (
                            <Disclosure key={index}>
                                {({open}) => (
                                    <>
                                        <Disclosure.Button
                                            className="flex justify-between w-full px-4 py-2 text-ls poppins-light-italic font-medium text-left text-gray-900  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>{faq.question}</span>
                                            {open ? (
                                                <MinusIcon className="w-5 h-5 text-gray-500"/>
                                            ) : (
                                                <PlusIcon className="w-5 h-5 text-gray-500"/>
                                            )}
                                        </Disclosure.Button>
                                        <Disclosure.Panel
                                            className="px-4 pt-4 pb-2 text-sm poppins-extralight-italic text-gray-900 ">
                                            {faq.answer}
                                        </Disclosure.Panel>
                                        <hr/>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;