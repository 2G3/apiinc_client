// ChildrenComponent.jsx
import React, { useEffect, useState } from 'react';
import { countriesList } from "@/functions/countries";
import { sexOptions } from "@/functions/genneralFunction";
import {useDispatch} from "react-redux";
import {updateFamilyInfo} from "../../../redux/formSlice";

const ChildrenComponent = ({ data, updateFormData }) => {
    const [childrenData, setChildrenData] = useState(data.children || []);
    const [currentChildIndex, setCurrentChildIndex] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setChildrenData(data.children || []);
    }, [data]);

    const handleChange = (index, field, value) => {
        const updatedChildren = [...childrenData];
        const childToUpdate = updatedChildren[index];

        const updatedChild = {
            ...childToUpdate,
            [field]: field === "isBiological" ? Boolean(value) : value
        };

        updatedChildren[index] = updatedChild;
        setChildrenData(updatedChildren);
    };

    const addChild = () => {
        const newChild = {
            firstName: "",
            lastName: "",
            birthDate: "",
            birthCity: "",
            birthCountry: "",
            currentCity: "",
            currentCountry: "",
            sex: "",
            isBiological: false
        };
        setChildrenData([...childrenData, newChild]);
        setCurrentChildIndex(childrenData.length);
    };

    const handleDelete = (index) => {
        const updatedChildrenList = childrenData.filter((_, i) => i !== index);
        setChildrenData(updatedChildrenList);
        updateFormData(updatedChildrenList);
        setCurrentChildIndex(null);
    };

    const SaveCurrentChildChange = () => {
        dispatch(updateFamilyInfo(childrenData))
        setCurrentChildIndex(null);
    };

    return (
        <div className="space-y-4">
            {childrenData.length > 0 && (
                <div className="mb-4">
                    {childrenData.map((child, index) => (
                        currentChildIndex !== index && (
                            <div key={index} className="border rounded-lg p-4 mb-2 bg-gray-100 shadow-sm">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-semibold text-lg poppins-semibold">{child.firstName} {child.lastName}</h3>
                                        <p className="text-sm text-gray-600 poppins-light">Date de Naissance: {child.birthDate}</p>
                                        <p className="text-sm text-gray-600 poppins-light">Lieu de Naissance: {child.birthCity}, {child.birthCountry}</p>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="text-gray-900 hover:text-blue-700 transition poppins-medium"
                                            onClick={() => setCurrentChildIndex(index)}
                                        >
                                            Modifier
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            )}

            {currentChildIndex !== null && (
                <div className="space-y-4 border rounded-lg p-4 bg-white shadow-md">
                    <h2 className="text-lg font-semibold poppins-semibold">Modifier Enfant {currentChildIndex + 1}</h2>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex flex-row justify-end">
                            <button
                                type="button"
                                className="text-red-500 hover:text-red-700 transition mr-2 poppins-medium"
                                onClick={() => handleDelete(currentChildIndex)}
                            >
                                Supprimer
                            </button>
                            <button
                                type="button"
                                className="text-blue-500 hover:text-blue-700 transition poppins-medium"
                                onClick={SaveCurrentChildChange}
                            >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 poppins-regular">Prénom</label>
                        <input
                            type="text"
                            value={childrenData[currentChildIndex].firstName}
                            onChange={(e) => handleChange(currentChildIndex, 'firstName', e.target.value)}
                            className="mt-1 block w-full border-b-[1px] border-gray-300 focus:border-gray-500 focus:ring-0 poppins-light"
                        />
                    </div>
                    {/* ... répétez pour les autres champs */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 poppins-regular">
                            Est-ce que l'enfant est biologique ?
                        </label>
                        <select
                            value={String(childrenData[currentChildIndex].isBiological)}
                            onChange={(e) => handleChange(currentChildIndex, 'isBiological', e.target.value === 'true')}
                            className="mt-1 block w-full border-b-[1px] border-gray-300 focus:border-gray-500 focus:ring-0 poppins-light"
                        >
                            <option value="true">Oui</option>
                            <option value="false">Non</option>
                        </select>
                    </div>
                </div>
            )}
            <button
                type="button"
                onClick={addChild}
                className="mt-4 px-4 py-2 bg-[#152542] text-white rounded-md hover:bg-[#0f1a3c] transition poppins-medium"
            >
                + Ajouter un autre enfant
            </button>
        </div>
    );
};

export default ChildrenComponent;
