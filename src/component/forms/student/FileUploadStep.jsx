// FileUploadStep.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUploadedFiles } from '@/../redux/formSlice';

const selects = [
    { fr: "CV", en: "cv" },
    { fr: "Lettre de motivation", en: "cover_letter" },
    { fr: "Lettre d'emploi", en: "work_letter" },
    { fr: "Diplôme", en: "diploma" },
    { fr: "Relevé de notes", en: "transcript" },
];

const Paragraph = "Voulez-vous ajouter un document ? L'ajout de documents selon le type de demande que vous effectuez peut contribuer à soutenir votre demande et faciliter les procédures d'inscription.";

const FileUploadStep = ({ data, onNext, onBack, step }) => {
    const dispatch = useDispatch();

    const [fileType, setFileType] = useState('');
    const [file, setFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileInputKey, setFileInputKey] = useState(0);
    const [addDocument, setAddDocument] = useState("no");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleAdd = () => {
        if (addDocument === "yes" && (!fileType || !file)) {
            alert('Veuillez sélectionner un type de fichier et un fichier.');
            return;
        }
        setUploadedFiles([...uploadedFiles, { fileType, file }]);
        // Réinitialiser les champs
        setFileType('');
        setFile(null);
        setFileInputKey(fileInputKey + 1); // Pour réinitialiser le champ de fichier
    };

    const handleFileRemoveFromArray = (index) => {
        const newArray = uploadedFiles.filter((_, i) => i !== index);
        setUploadedFiles(newArray);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (addDocument === "yes" && uploadedFiles.length === 0) {
            alert('Veuillez ajouter au moins un fichier.');
            return;
        }
        // Dispatch des fichiers sélectionnés dans le store Redux
        dispatch(updateUploadedFiles(uploadedFiles));
        onNext();
    };

    const handleDocumentSelection = (e) => {
        setAddDocument(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="my-4">
                <p className="text-lg text-gray-700 poppins-semibold">{Paragraph}</p>
                <label className="block text-sm font-medium text-gray-700 mt-4 poppins-semibold">Voulez-vous ajouter un document ?</label>
                <select
                    name="add_document"
                    value={addDocument}
                    onChange={handleDocumentSelection}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent poppins-light text-sm"
                >
                    <option value="yes">Oui, je veux ajouter des documents</option>
                    <option value="no">Non, je ne veux pas ajouter de documents</option>
                </select>
            </div>
            {addDocument === "yes" && (
                <div className="max-w-lg mx-auto">
                    <div className="my-4">
                        <label className="block text-sm font-medium text-gray-700 poppins-semibold">Type de document :</label>
                        <select
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent poppins-light text-sm"
                            name="fileType"
                            value={fileType}
                            onChange={(e) => setFileType(e.target.value)}
                        >
                            <option value="">Sélectionnez le type de fichier</option>
                            {selects.map((select, index) => (
                                <option key={index} value={select.en}>{select.fr}</option>
                            ))}
                        </select>
                    </div>
                    <div className="my-4">
                        <label className="block text-sm font-medium text-gray-700 poppins-semibold">
                            Téléchargez votre document (PDF)
                        </label>
                        <input
                            key={fileInputKey}
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent poppins-light text-sm"
                        />
                        <button
                            type="button"
                            onClick={handleAdd}
                            className="mt-2 px-4 py-2 bg-[#152542] text-white rounded-md hover:bg-[#272C40] transition poppins-medium"
                        >
                            Ajouter
                        </button>
                    </div>
                    {uploadedFiles.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-900 poppins-semibold">Fichiers ajoutés :</h3>
                            <ul className="mt-4 space-y-2">
                                {uploadedFiles.map((item, index) => (
                                    <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
                                        <div>
                                            <p className="text-sm font-medium text-gray-800 poppins-medium">{item.fileType}</p>
                                            <p className="text-sm text-gray-600 poppins-light">{item.file.name}</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleFileRemoveFromArray(index)}
                                            className="text-red-500 hover:text-red-700 transition poppins-medium"
                                        >
                                            Supprimer
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
            <div className="mt-8 flex justify-between">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition poppins-medium"
                >
                    Retour
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-[#152542] text-white rounded-md hover:bg-[#272C40] transition poppins-medium"
                >
                    Suivant
                </button>
            </div>
        </form>
    );
};

export default FileUploadStep;
