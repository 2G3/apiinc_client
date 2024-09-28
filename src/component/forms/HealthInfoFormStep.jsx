// HealthInfoFormStep.jsx
import React, { useState, useEffect } from 'react';
import { FormBackButton, FormNextButton } from "../buttons/FormButton";
import {updateHealthInfo} from "@/../redux/formSlice";
import {useDispatch} from "react-redux";

const HealthInfoFormStep = ({ data, onNext, onBack, renderHelpIcon, step }) => {
    const [tempData, setTempData] = useState(data.healthInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        setTempData(data.healthInfo);
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempData({ ...tempData, [name]: value });
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setTempData({ ...tempData, [name]: value === 'true' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateHealthInfo(tempData));
        onNext();
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-[#152542] mb-4 poppins-semibold">Informations sur votre santé</h1>

                <div>
                    <label htmlFor="chronicDiseases" className="block text-sm font-medium text-gray-700 poppins-semibold">
                        Souffrez-vous de maladies chroniques
                        ? {renderHelpIcon("Une maladie chronique est une affection de longue durée qui évolue lentement au fil du temps, comme le diabète ou l'hypertension. Indiquez si vous avez des maladies chroniques.")}
                    </label>
                    <select
                        name="chronicDiseases"
                        id="chronicDiseases"
                        value={String(tempData.chronicDiseases)}
                        onChange={handleSelectChange}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                    >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                    </select>
                </div>
                {tempData.chronicDiseases && (
                    <div>
                        <label htmlFor="chronicDiseasesDetails" className="block text-sm font-medium text-gray-700 poppins-semibold">
                            Détails des maladies chroniques
                        </label>
                        <textarea
                            name="chronicDiseasesDetails"
                            id="chronicDiseasesDetails"
                            value={tempData.chronicDiseasesDetails}
                            onChange={handleChange}
                            placeholder="Veuillez fournir des détails sur vos maladies chroniques."
                            className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                        />
                    </div>
                )}

                <div>
                    <label htmlFor="medications" className="block text-sm font-medium text-gray-700 poppins-semibold">
                        Prenez-vous des médicaments
                        ? {renderHelpIcon("Indiquez si vous prenez actuellement des médicaments pour une quelconque raison.")}
                    </label>
                    <select
                        name="medications"
                        id="medications"
                        value={String(tempData.medications)}
                        onChange={handleSelectChange}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                    >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                    </select>
                </div>
                {tempData.medications && (
                    <div>
                        <label htmlFor="medicationsDetails" className="block text-sm font-medium text-gray-700 poppins-semibold">
                            Détails des médicaments
                        </label>
                        <textarea
                            name="medicationsDetails"
                            id="medicationsDetails"
                            value={tempData.medicationsDetails}
                            onChange={handleChange}
                            placeholder="Veuillez fournir des détails sur les médicaments que vous prenez."
                            className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                        />
                    </div>
                )}

                <div>
                    <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 poppins-semibold">
                        Avez-vous des allergies
                        ? {renderHelpIcon("Indiquez si vous avez des allergies et spécifiez à quoi vous êtes allergique, comme le pollen, les aliments, ou les médicaments.")}
                    </label>
                    <select
                        name="allergies"
                        id="allergies"
                        value={String(tempData.allergies)}
                        onChange={handleSelectChange}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                    >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                    </select>
                </div>
                {tempData.allergies && (
                    <div>
                        <label htmlFor="allergiesDetails" className="block text-sm font-medium text-gray-700 poppins-semibold">
                            Détails des allergies
                        </label>
                        <textarea
                            name="allergiesDetails"
                            id="allergiesDetails"
                            value={tempData.allergiesDetails}
                            onChange={handleChange}
                            placeholder="Veuillez fournir des détails sur vos allergies."
                            className="mt-1 block w-full border-b-[1px] border-gray-300 focus:ring-0"
                        />
                    </div>
                )}

                <div className="mt-6 flex justify-between">
                    {onBack && (
                        <FormBackButton text="Retour" onClick={onBack} />
                    )}
                    <FormNextButton
                        text={step.prevStep === 7 ? "Sauvegarder" : "Suivant"}
                        disabled={false}
                    />
                </div>
            </form>
        </div>
    );
};

export default HealthInfoFormStep;
