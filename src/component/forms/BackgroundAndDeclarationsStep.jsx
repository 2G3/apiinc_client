import React, { useEffect, useState } from 'react';
import {FormBackButton, FormNextButton} from "../buttons/FormButton";
import {useDispatch} from "react-redux";
import {updateBackgroundHistory} from "../../../redux/formSlice";



const BackgroundAndDeclarationsStep= ({ data, onNext, onBack, renderHelpIcon, step }) => {
    const [tempData, setTempData] = useState(data.backgroundHistory);
    const dispatch = useDispatch();

    useEffect(() => {
        setTempData(data.backgroundHistory);
    }, [data]);

    const handleImmigrationHistoryChange = (field, value) => {

        //if the field is a boolean, convert the value to a boolean
        if (value === "true") {
            setTempData({ ...tempData, [field]: true });
        } else if (value === "false") {
            setTempData({ ...tempData, [field]: false });
        }
        else {
            setTempData({ ...tempData, [field]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBackgroundHistory(tempData))
        onNext();
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Avez-vous déjà voyagé au Canada ou dans
                        un autre pays
                        ? {renderHelpIcon("Veuillez indiquer vos historiques de voyage au Canada ou dans un autre pays. Les raisons et la durée de vos séjours.")}</label>
                    <select
                        value={String(tempData?.hasImmigrationHistory)}
                        onChange={(e) => handleImmigrationHistoryChange('hasImmigrationHistory', e.target.value)}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                    >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                    </select>
                </div>

                {tempData?.hasImmigrationHistory && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Raison du voyage</label>
                        <textarea
                            value={tempData?.reasonOfTravel}
                            onChange={(e) => handleImmigrationHistoryChange('reasonOfTravel', e.target.value)}
                            className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                            placeholder="Veuillez fournir la raison de votre voyage."
                        />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Avez-vous déjà demandé l&apos;asile au
                        Canada ou dans un autre pays
                        ? {renderHelpIcon("Veuillez indiquer si vous avez déjà soumis une demande d'asile au Canada ou dans un pays étranger, et fournir les détails si applicable.")}</label>
                    <select
                        value={String(tempData?.hasAskedAsylum)}
                        onChange={(e) => handleImmigrationHistoryChange('hasAskedAsylum', e.target.value)}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                    >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                    </select>
                </div>

                {tempData?.hasAskedAsylum && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Raison de la demande
                            d&apos;asile</label>
                        <textarea
                            value={tempData?.reasonOfAsylum}
                            onChange={(e) => handleImmigrationHistoryChange('reasonOfAsylum', e.target.value)}
                            className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                            placeholder="Veuillez fournir la raison de votre demande d'asile."
                        />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Avez-vous déjà été accepté(e) pour
                        l&apos;immigration au Canada ou dans un autre pays
                        ? {renderHelpIcon("Veuillez préciser si vous avez été accepté(e) pour l'immigration dans un autre pays, ainsi que les détails pertinents.")}</label>
                    <select
                        value={String(tempData?.hasBeenAccepted)}
                        onChange={(e) => handleImmigrationHistoryChange('hasBeenAccepted', e.target.value)}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                    >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                    </select>
                </div>

                {tempData?.hasBeenAccepted && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Détails de l&apos;acceptation</label>
                        <textarea
                            value={tempData?.reasonOfAcceptance}
                            onChange={(e) => handleImmigrationHistoryChange('reasonOfAcceptance', e.target.value)}
                            className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                            placeholder="Donnez des détails sur l'acceptation, le type de visa, le pays, et toute autre information pertinente."
                        />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Avez-vous déjà été détenu(e) par les
                        autorités canadiennes, de votre pays ou d&apos;un autre pays
                        ? {renderHelpIcon("Indiquez si vous avez déjà été détenu(e) par les autorités dans n'importe quel pays, et fournissez les détails nécessaires.")}</label>
                    <select
                        value={String(tempData?.hasBeenDetained)}
                        onChange={(e) => handleImmigrationHistoryChange('hasBeenDetained', e.target.value)}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                    >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                    </select>
                </div>

                {tempData?.hasBeenDetained && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Raison de la détention</label>
                        <textarea
                            value={tempData.reasonOfDetention}
                            onChange={(e) => handleImmigrationHistoryChange('reasonOfDetention', e.target.value)}
                            className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                            placeholder="Veuillez fournir la raison de votre détention."
                        />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Avez-vous déjà été refusé(e) pour
                        l&apos;immigration au Canada ou dans un autre pays
                        ? {renderHelpIcon("Veuillez indiquer si vous avez été refusé(e) pour l'immigration dans un autre pays et fournir les raisons de ce refus.")}</label>
                    <select
                        value={String(tempData?.hasBeenRefused)}
                        onChange={(e) => handleImmigrationHistoryChange('hasBeenRefused', e.target.value)}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                    >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                    </select>
                </div>

                {tempData?.hasBeenRefused && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Raison du refus</label>
                        <textarea
                            value={tempData?.reasonOfRefusal}
                            onChange={(e) => handleImmigrationHistoryChange('reasonOfRefusal', e.target.value)}
                            className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                            placeholder="Veuillez fournir la raison pour laquelle votre demande a été refusée."
                        />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Avez-vous déjà été déporté(e) d&apos;un
                        autre pays
                        ? {renderHelpIcon("Indiquez si vous avez été déporté(e) d'un autre pays et fournissez les raisons de cette déportation.")}</label>
                    <select
                        value={String(tempData?.hasBeenDeported)}
                        onChange={(e) => handleImmigrationHistoryChange('hasBeenDeported', e.target.value)}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                    >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                    </select>
                </div>

                {tempData?.hasBeenDeported && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Raison de la déportation</label>
                        <textarea
                            value={tempData?.reasonOfDeportation}
                            onChange={(e) => handleImmigrationHistoryChange('reasonOfDeportation', e.target.value)}
                            className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                            placeholder="Veuillez fournir la raison de votre déportation."
                        />
                    </div>
                )}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Avez-vous été impliqué(e) dans des
                        affaires politiques qui ont eu des conséquences sur votre vie
                        ? {renderHelpIcon("Veuillez indiquer si vous avez été impliqué(e) dans des affaires politiques ayant eu des répercussions sur votre vie, et fournir les détails nécessaires.")}</label>
                    <select
                        value={String(tempData?.hasPoliticalViolence)}
                        onChange={(e) => handleImmigrationHistoryChange('hasPoliticalViolence', e.target.value)}
                        className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                    >
                        <option value="false">Non</option>
                        <option value="true">Oui</option>
                    </select>
                </div>

                {tempData?.hasPoliticalViolence && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Détails de l&apos;implication
                            politique</label>
                        <textarea
                            value={tempData?.reasonOfPoliticalViolence}
                            onChange={(e) => handleImmigrationHistoryChange('reasonOfPoliticalViolence', e.target.value)}
                            className="mt-1 block w-full border-b-[1px] border-gray-300 poppins-extralight-italic focus:ring-0"
                            placeholder="Veuillez fournir la raison de votre implication dans des affaires politiques."
                        />
                    </div>
                )}

                <div className="mt-6 flex justify-between">
                    <FormBackButton text="Retour" onClick={onBack}/>
                    <button type="button" onClick={"handleAddBackgroundAndDeclarations"}
                            className="px-4 py-2 bg-[#162542] text-white rounded-md hover:bg-[#0f1a3c] transition poppins-medium">+
                        Ajouter une autre éducation
                    </button>
                    <FormNextButton
                        text={step.prevStep === 7 ? "Sauvegarder" : "Suivant"}
                        disabled={false}
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default BackgroundAndDeclarationsStep;