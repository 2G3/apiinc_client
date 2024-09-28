// stepsByDemandType.js
import IdentificationStep from './IdentificationStep';
import ProfessionStep from './workers/ProfessionStep';
import EducationStep from './student/EducationStep';
import FinancialInfoFormStep from './FinancialInfoFormStep';
import FileUploadStep from "@/component/forms/student/FileUploadStep";
import HealthInfoFormStep from "@/component/forms/HealthInfoFormStep";
import BackgroundAndDeclarationsStep from "@/component/forms/BackgroundAndDeclarationsStep";
// Importez tous les composants nécessaires

const stepsByDemandType = {
    'international student': [
        { id: 'IdentificationStep', label: 'Identification Personnel', component: IdentificationStep },
        { id: 'EducationStep', label: 'Formation Scolaire', component: EducationStep },
        { id: 'FileUploadStep', label: 'Téléchargement de Documents', component: FileUploadStep },
        { id: "HealthInfoFormStep", label: "Information sur votre etat de sante", component: HealthInfoFormStep},
        { id: "FinancialInfoFormStep", label: "information sur votre situation financiere", component: FinancialInfoFormStep},
        { id: "BackgroundAndDeclarationsStep", label: "Information sur votre etat de sante antecedents", component: BackgroundAndDeclarationsStep},
        // { id: 'FinancialInfoFormStep', label: 'Situation Financière', component: FinancialInfoFormStep },
        // { id: 'HealthInfoFormStep', label: 'Situation de Santé', component: HealthInfoFormStep },
        // Ajoutez d'autres étapes spécifiques si nécessaire
    ],
    'temporary worker': [
        { id: 'IdentificationStep', label: 'Identification Personnel', component: IdentificationStep },
        { id: 'ProfessionStep', label: 'Historique Professionnel', component: ProfessionStep },
        { id: 'FinancialInfoFormStep', label: 'Situation Financière', component: FinancialInfoFormStep },
        { id: 'HealthInfoFormStep', label: 'Situation de Santé', component: HealthInfoFormStep },
        // Ajoutez d'autres étapes spécifiques si nécessaire
    ],
    // Ajoutez d'autres types de demandes...
};

export default stepsByDemandType;
