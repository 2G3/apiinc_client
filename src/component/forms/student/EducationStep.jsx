import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {FormBackButton, FormNextButton} from "@/component/buttons/FormButton";
import { updateEducation } from "../../../../redux/formSlice";

const EducationStep = ({ data, onBack, onNext, step }) => {
    const dispatch = useDispatch();

    // Initialisation de l'état local avec les données d'éducation existantes ou un tableau vide
    const [educationData, setEducationData] = useState(data.education || []);
    const [currentEducationIndex, setCurrentEducationIndex] = useState(null); // Index de l'entrée en cours d'édition

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleEducationChange = (field, value) => {
        setEducationData(prevEducationData => {
            const updatedEducationData = [...prevEducationData];
            updatedEducationData[currentEducationIndex] = {
                ...updatedEducationData[currentEducationIndex],
                [field]: value,
            };
            return updatedEducationData;
        });
    };

    // Fonction pour ajouter une nouvelle entrée d'éducation
    const handleAddEducation = () => {
        setEducationData([...educationData, {
            degree: '',
            schoolName: '',
            startDate: '',
            endDate: '',
            description: '',
        }]);
        setCurrentEducationIndex(educationData.length); // Index de la nouvelle entrée
    };

    // Fonction pour éditer une entrée existante
    const handleEditEducation = (index) => {
        setCurrentEducationIndex(index);
    };

    // Fonction pour sauvegarder les modifications
    const handleSaveEducation = () => {
        setCurrentEducationIndex(null); // Sort de l'édition
        dispatch(updateEducation(educationData)); // Met à jour le store Redux
    };

    // Fonction pour annuler l'édition
    const handleCancelEdit = () => {
        // Si on annule une nouvelle entrée, on la retire du tableau
        if (currentEducationIndex === educationData.length - 1 && !educationData[currentEducationIndex].degree) {
            setEducationData(educationData.slice(0, -1));
        }
        setCurrentEducationIndex(null);
    };

    // Fonction pour soumettre les données et passer à l'étape suivante
    const handleSubmit = (e) => {
        e.preventDefault();
        // Vérifier si une entrée est en cours d'édition
        if (currentEducationIndex !== null) {
            alert("Veuillez enregistrer ou annuler l'édition en cours avant de continuer.");
            return;
        }
        // Mettre à jour le store Redux au cas où il y aurait des modifications non enregistrées
        dispatch(updateEducation(educationData));
        onNext(); // Passe à l'étape suivante
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Parcourt chaque entrée d'éducation */}
            {educationData.map((item, index) => (
                <div key={index}>
                    {currentEducationIndex === index ? (
                        // Affiche le formulaire d'édition pour l'entrée en cours
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex justify-between">
                                <h3 className="text-lg text-gray-600 poppins-semibold underline pb-3">Éducation {index + 1}</h3>
                                <button type="button" onClick={handleCancelEdit} className="text-red-500 hover:text-red-700 transition poppins-medium">Annuler</button>
                                <button type="button" onClick={handleSaveEducation} className="text-[#162542] hover:text-[#0f1a3c] transition poppins-medium">Enregistrer</button>
                            </div>
                            {/* Champs du formulaire */}
                            <div>
                                <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-gray-700 poppins-light-italic">Diplôme</label>
                                <input
                                    type="text"
                                    name={`degree-${index}`}
                                    id={`degree-${index}`}
                                    value={item.degree}
                                    onChange={e => handleEducationChange('degree', e.target.value)}
                                    required
                                    className="mt-1 block w-full border-b-[1px] border-gray-300 focus:border-gray-500 focus:ring-0 poppins-light"
                                />
                            </div>
                            <div>
                                <label htmlFor={`institution-${index}`} className="block text-sm font-medium text-gray-700 poppins-light-italic">Institution</label>
                                <input
                                    type="text"
                                    name={`institution-${index}`}
                                    id={`institution-${index}`}
                                    value={item.schoolName}
                                    onChange={e => handleEducationChange('schoolName', e.target.value)}
                                    required
                                    className="mt-1 block w-full border-b-[1px] border-gray-300 focus:border-gray-500 focus:ring-0 poppins-light"
                                />
                            </div>
                            <div className="flex flex-row gap-4">
                                <div>
                                    <label htmlFor={`startDate-${index}`} className="block text-sm font-medium text-gray-700 poppins-light-italic">Date de début</label>
                                    <input
                                        type="date"
                                        name={`startDate-${index}`}
                                        id={`startDate-${index}`}
                                        value={item.startDate}
                                        onChange={e => handleEducationChange('startDate', e.target.value)}
                                        required
                                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:border-gray-500 focus:ring-0 poppins-light"
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`endDate-${index}`} className="block text-sm font-medium text-gray-700 poppins-light-italic">Date de fin</label>
                                    <input
                                        type="date"
                                        name={`endDate-${index}`}
                                        id={`endDate-${index}`}
                                        value={item.endDate}
                                        onChange={e => handleEducationChange('endDate', e.target.value)}
                                        required
                                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:border-gray-500 focus:ring-0 poppins-light"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-700 poppins-light-italic">Description</label>
                                <textarea
                                    name={`description-${index}`}
                                    id={`description-${index}`}
                                    value={item.description}
                                    onChange={e => handleEducationChange('description', e.target.value)}
                                    required
                                    className="mt-1 block w-full border-b-[1px] border-gray-300 focus:border-gray-500 focus:ring-0 poppins-light"
                                />
                            </div>
                        </div>
                    ) : (
                        // Affiche le résumé de l'entrée d'éducation
                        <div className="bg-gray-100 p-4 rounded-md mb-4 shadow-sm">
                            <div className="flex justify-between">
                                <h3 className="text-lg text-gray-600 poppins-semibold underline pb-3">Éducation {index + 1}</h3>
                                <button type="button" onClick={() => handleEditEducation(index)} className="text-[#162542] hover:text-[#0f1a3c] transition poppins-medium">Modifier</button>
                            </div>
                            <p className="text-gray-700 poppins-light"><strong>Diplôme :</strong> {item.degree}</p>
                            <p className="text-gray-700 poppins-light"><strong>Institution :</strong> {item.schoolName}</p>
                            <p className="text-gray-700 poppins-light"><strong>Date de début :</strong> {item.startDate}</p>
                            <p className="text-gray-700 poppins-light"><strong>Date de fin :</strong> {item.endDate}</p>
                            <p className="text-gray-700 poppins-light"><strong>Description :</strong> {item.description}</p>
                        </div>
                    )}
                </div>
            ))}
            <div className="mt-6 flex justify-between">
                <FormBackButton text="Retour" onClick={onBack} />
                <button type="button" onClick={handleAddEducation} className="px-4 py-2 bg-[#162542] text-white rounded-md hover:bg-[#0f1a3c] transition poppins-medium">+ Ajouter une autre éducation</button>
                <FormNextButton
                    text={step.prevStep === 7 ? "Sauvegarder" : "Suivant"}
                    disabled={false}
                    type="submit"
                />
            </div>
        </form>
    );
};

export default EducationStep;
