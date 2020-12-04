import LanguageReducer from './languageReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    languages: LanguageReducer,
})

export default rootReducer