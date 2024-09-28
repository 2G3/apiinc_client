import React, { useEffect, useState } from 'react';
import {FormBackButton, FormNextButton} from "../buttons/FormButton";
import {useDispatch} from "react-redux";
import {updateFinancialInfo} from "../../../redux/formSlice";


const Paragraph = "Donner les informations approximatives sur votre situation financière actuel " +
    "ou de la personne qui vous prendra en charge. Ces informations nous aidera dans l'étude de votre dossier" +
    "afin de mieux vous orienter. Les montants doivent être en dollars canadien(CAD)";

const FinancialInfoFormStep = ({ data, onNext, onBack, renderHelpIcon, step }) => {
    const [tempData, setTempData] = useState(data.financialInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        setTempData(data.financialInfo);
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempData({ ...tempData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateFinancialInfo(tempData));
        onNext();
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-sm text-gray-700 poppins-light">{Paragraph}</p>
                <div>
                    <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700">
                        Revenu annuel {renderHelpIcon("Entrez votre révenu approximatif annuel.")}
                    </label>
                    <div className="flex items-center mt-1">
                        <input
                            type="number"
                            name="annualIncome"
                            id="annualIncome"
                            value={tempData.annualIncome}
                            onChange={handleChange}
                            placeholder="Ex : 50000"
                            className="block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                        />
                        <span className="ml-2 text-gray-500">$</span>
                    </div>
                </div>

                {/*<div>*/}
                {/*    <label htmlFor="investments" className="block text-sm font-medium text-gray-700">*/}
                {/*        Investissements {renderHelpIcon("Si vous avez des investissements. Veillez entrez ")}*/}
                {/*    </label>*/}
                {/*    <div className="flex items-center mt-1">*/}
                {/*        <input*/}
                {/*            type="number"*/}
                {/*            name="investments"*/}
                {/*            id="investments"*/}
                {/*            value={tempData.investments}*/}
                {/*            onChange={handleChange}*/}
                {/*            placeholder="Ex : 700"*/}
                {/*            className="block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"*/}
                {/*        />*/}
                {/*        <span className="ml-2 text-gray-500">$</span>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div>
                    <label htmlFor="savings" className="block text-sm font-medium text-gray-700">
                        Vos épargnes personnelles {renderHelpIcon("Vos épargnes personnelles en Dollars CAD. Si vous n'avez pas d'épargne, veillez indiquer '0'")}
                    </label>
                    <div className="flex items-center mt-1">
                        <input
                            type="number"
                            name="savings"
                            id="savings"
                            value={tempData.savings}
                            onChange={handleChange}
                            placeholder="Ex : 700"
                            className="block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                        />
                        <span className="ml-2 text-gray-500">$</span>
                    </div>
                </div>

                <div>
                    <label htmlFor="debts" className="block text-sm font-medium text-gray-700">
                        Vos dettes {renderHelpIcon("Vos dettes.")}
                    </label>
                    <div className="flex items-center mt-1">
                        <input
                            type="number"
                            name="debts"
                            id="debts"
                            value={tempData.debts}
                            onChange={handleChange}
                            placeholder="Ex : 700"
                            className="block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                        />
                        <span className="ml-2 text-gray-500">$</span>
                    </div>
                </div>

                <div className="mt-6 flex justify-between">
                    {onBack && (
                        <FormBackButton text="Retour" onClick={onBack}/>
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

export default FinancialInfoFormStep;