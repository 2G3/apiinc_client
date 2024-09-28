import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentStep: 0,
    demandType: "",
    uploadedFiles: [],
    personalInfo: {
        firstName: '',
        lastName: '',
        birthDate: '',
        birthCountry: '',
        birthCity: '',
        currentCountry: '',
        currentCity: '',
        email: '',
        sex: '',
        phoneNumber: '',
    },
    familyInfo: {
        civilStatus: '',
        spouse: "",
        dateOfMarriage: '',
        isCivicMarriage: false,
        isReligiousMarriage: false,
        numberOfChildren: 0,
        children: [],
    },
    professions: [],
    education: [],
    languages: [],
    financialInfo: {
        annualIncome: '',
        savings: '',
        // investments: '',
        debts: '',
    },
    healthInfo: {
        chronicDiseases: false,
        chronicDiseasesDetails: '',
        medications: false,
        medicationsDetails: '',
        allergies: false,
        allergiesDetails: '',
    },
    backgroundHistory: {
        hasImmigrationHistory: false,
        reasonOfTravel: '',
        hasAskedAsylum: false,
        reasonOfAsylum: '',
        hasBeenRefused: false,
        reasonOfRefusal: '',
        hasBeenAccepted: false,
        reasonOfAcceptance: '',
        hasBeenDeported: false,
        reasonOfDeportation: '',
        hasPoliticalViolence: false,
        reasonOfPoliticalViolence: '',
        hasBeenToPrison: false,
        hasBeenDetained: false,
        reasonOfDetention: '',
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateUploadedFiles: (state, action) => {
            state.uploadedFiles = action.payload;
        },

        //DEMAND TYPE
        updateDemandType: (state, action)=>{
            state.demandType = action.payload
        },

        // PERSONAL INFO
        updatePersonalInfo: (state, action) => {
            state.personalInfo = { ...state.personalInfo, ...action.payload };
        },
        // PROFESSIONS
        addProfession: (state, action) => {
            state.professions.push(action.payload);
        },
        clearProfessions: (state) => {
            state.professions = [];
        },
        // FAMILY INFO
        updateFamilyInfo: (state, action) => {
            state.familyInfo = { ...state.familyInfo, ...action.payload };
        },
        // EDUCATION
        AddEducation: (state, action) => {
            state.education.push(action.payload);
        },
        updateEducation: (state, action) => {
            state.education = action.payload
        },
        clearEducation: (state) => {
            state.education = [];
        },
        // LANGUAGES
        updateLanguages: (state, action) => {
            state.languages = [...state.languages, action.payload];
        },
        // FINANCIAL INFO
        updateFinancialInfo: (state, action) => {
            state.financialInfo = { ...state.financialInfo, ...action.payload };
        },
        // BACKGROUND
        updateBackgroundHistory: (state, action) => {
            state.backgroundHistory = { ...state.backgroundHistory, ...action.payload };
        },
        updateHealthInfo: (state, action) => {
            state.healthInfo = { ...state.healthInfo, ...action.payload };
        },
        // // IMMIGRATION HISTORY
        // updateBackgroundHistory: (state, action) => {
        //     state.immigrationHistory = { ...state.immigrationHistory, ...action.payload };
        // },
        nextStep: (state) => {
            state.currentStep += 1;
        },
        prevStep: (state) => {
            state.currentStep -= 1;
        },
    },
});

export const {
    updateUploadedFiles,
    updateDemandType,
    updatePersonalInfo,
    updateFamilyInfo,
    addProfession,
    clearProfessions,
    AddEducation,
    updateEducation,
    clearEducation,
    updateLanguages,
    updateFinancialInfo,
    updateBackgroundHistory,
    updateHealthInfo,
    // updateImmigrationHistory,
    nextStep,
    prevStep,
} = formSlice.actions;

export default formSlice.reducer;
