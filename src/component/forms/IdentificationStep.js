// IdentificationStep.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { sexOptions } from "@/functions/genneralFunction";
import { countriesList } from "@/functions/countries";
import { updatePersonalInfo } from "@/../redux/formSlice";
import { useDispatch } from "react-redux";



const IdentificationStep = ({ data, onNext, onBack, step,renderHelpIcon }) => {
    const dispatch = useDispatch();
    const [identificationData, setIdentificationData] = useState(data.personalInfo || {});

    useEffect(() => {
        setIdentificationData(data.personalInfo || {});
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIdentificationData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePersonalInfo(identificationData));
        onNext();
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-[#152542] mb-4 poppins-semibold">Informations Personnelles</h1>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 poppins-semibold">
                        Nom {renderHelpIcon("Votre nom de famille.")}
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={identificationData.lastName}
                        onChange={handleChange}
                        placeholder="Ex : Dupont"
                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                    />
                </div>
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 poppins-semibold">
                        Prénom {renderHelpIcon("Votre prénom.")}
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={identificationData.firstName}
                        onChange={handleChange}
                        placeholder="Ex : Jean"
                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                    />
                </div>
                <div>
                    <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 poppins-semibold">
                        Date de naissance {renderHelpIcon("Votre date de naissance au format JJ/MM/AAAA.")}
                    </label>
                    <input
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        value={identificationData.birthDate}
                        onChange={handleChange}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                    />
                </div>
                <div>
                    <label htmlFor="sex" className="block text-sm font-medium text-gray-700 poppins-semibold">
                        Sexe {renderHelpIcon("Votre genre.")}
                    </label>
                    <select
                        id="sex"
                        name="sex"
                        value={identificationData.sex || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                    >
                        <option value="">Sélectionnez le sexe</option>
                        {sexOptions.map((sex) => (
                            <option key={sex.En} value={sex.En}>
                                {sex.Fr}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="birthCountry" className="block text-sm font-medium text-gray-700 poppins-semibold">
                        Pays de naissance {renderHelpIcon("Le pays où vous êtes né.")}
                    </label>
                    <select
                        name="birthCountry"
                        id="birthCountry"
                        value={identificationData.birthCountry}
                        onChange={handleChange}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                    >
                        <option value="">Sélectionnez un pays</option>
                        {countriesList.map((country) => (
                            <option key={country.englishName} value={country.englishName}>
                                {country.frenchName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="birthCity" className="block text-sm font-medium text-gray-700 poppins-semibold">
                        Ville de naissance {renderHelpIcon("La ville où vous êtes né.")}
                    </label>
                    <input
                        type="text"
                        name="birthCity"
                        id="birthCity"
                        value={identificationData.birthCity}
                        onChange={handleChange}
                        placeholder="Ex : Paris"
                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                    />
                </div>
                <div>
                    <label htmlFor="currentCountry" className="block text-sm font-medium text-gray-700 poppins-semibold">
                        Pays de résidence actuel {renderHelpIcon("Le pays où vous vivez actuellement.")}
                    </label>
                    <select
                        name="currentCountry"
                        id="currentCountry"
                        value={identificationData.currentCountry}
                        onChange={handleChange}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                    >
                        <option value="">Sélectionnez un pays</option>
                        {countriesList.map((country) => (
                            <option key={country.englishName} value={country.englishName}>
                                {country.frenchName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-6 flex justify-between">
                    {onBack && (
                        <button
                            type="button"
                            onClick={onBack}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition poppins-medium"
                        >
                            Retour
                        </button>
                    )}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#152542] text-white rounded-md hover:bg-[#272C40] transition poppins-medium"
                    >
                        {step.prevStep === 7 ? "Sauvegarder" : "Suivant"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default IdentificationStep;
