"use client";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateDemandType,
    updatePersonalInfo,
    updateEducation,
    // Importez les autres actions nécessaires ici
} from "@/../redux/formSlice";
import Demand from "@/component/forms/demand";
import stepsByDemandType from './stepsByDemandType';
import { persistor } from "../../../redux/store";


const renderHelpIcon = (message) => (
    <span className="ml-2 text-gray-500 cursor-pointer" onClick={() => alert(message)}>
        ?
    </span>
);

const DynamicForm = ({ params }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [steps, setSteps] = useState([]);
    const [selectedDemandType, setSelectedDemandType] = useState('');
    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();


    const submitFormData = (form) => {
        //TODO: call method to send data to server here
        console.log('Formulaire complet :', form);

    };

    const handleDemandTypeSelection = (demandType) => {
        setSelectedDemandType(demandType);
        dispatch(updateDemandType(demandType));
        const newSteps = stepsByDemandType[demandType] || [];
        setSteps(newSteps);
        setCurrentStepIndex(0);
    };

    // Fonction pour vider les données (bouton Purge)
    const handleClearPersist = () => {
        persistor.purge();
        window.location.reload();
    };



    const handleNext = (data) => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex((prevIndex) => prevIndex + 1);
        } else {
            // Gestion de la soumission finale
            submitFormData(form)

        }
    };

    const handleBack = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex((prevIndex) => prevIndex - 1);
        } else {
            setSelectedDemandType('');
            setSteps([]);
        }
    };

    const currentStep = steps[currentStepIndex];
    const StepComponent = currentStep?.component;





    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            {!selectedDemandType ? (
                <Demand onSelectDemandType={handleDemandTypeSelection}/>
            ) : (
                <div className="w-full max-w-2xl bg-white p-6">
                    <h2 className="text-2xl font-semibold text-center mb-6">
                        {currentStep?.label}
                    </h2>
                    {StepComponent && (
                        <StepComponent
                            data={form}
                            onNext={handleNext}
                            onBack={handleBack}
                            step={currentStep}
                            renderHelpIcon={renderHelpIcon}
                        />
                    )}
                </div>
            )}
            <button
                onClick={handleClearPersist}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition"
            >
                Clear Data
            </button>
        </div>
    );
};

export default DynamicForm;
