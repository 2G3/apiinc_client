// Demand.jsx
import React, { useState } from 'react';

const demandtype = [
    { Fr: "Étudiant international", En: "international student" },
    { Fr: "Travailleur temporaire", En: "temporary worker" },
    { Fr: "Résident permanent", En: "permanent resident" },
    { Fr: "Travailleur qualifié", En: "skilled worker" },
    { Fr: "Permis de travail ouvert", En: "open work permit" },
    { Fr: "Visa de visiteur", En: "visitor visa" },
    { Fr: "Permis d'études", En: "study permit" },
    { Fr: "Parrainage de conjoint", En: "spousal sponsorship" },
];

const Demand = ({ onSelectDemandType }) => {
    const [selectedType, setSelectedType] = useState('');

    const handleChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedType) {
            onSelectDemandType(selectedType);
        } else {
            alert('Veuillez sélectionner un type de demande.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <label htmlFor="demandType" className="block text-sm font-medium text-gray-700 mb-2">
                Type de demande
            </label>
            <select
                id="demandType"
                name="demandType"
                value={selectedType}
                onChange={handleChange}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
            >
                <option value="">Sélectionnez un type de demande</option>
                {demandtype.map((type, index) => (
                    <option key={index} value={type.En}>
                        {type.Fr}
                    </option>
                ))}
            </select>
            <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
                Suivant
            </button>
        </form>
    );
};

export default Demand;
