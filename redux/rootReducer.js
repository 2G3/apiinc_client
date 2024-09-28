import { combineReducers } from 'redux';
import authSlice from "./authSlice";
import formReducer from './formSlice';
// import authSlice from "./authSlice";
// Importez d'autres réducteurs si vous en avez

const rootReducer = combineReducers({
    form: formReducer,
    auth: authSlice,
    // Ajoutez d'autres réducteurs ici
});

export default rootReducer;