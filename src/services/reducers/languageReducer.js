/*
    Reducer for language selection 
*/

// list of language
const languages = [
    {
        "key": "fr",
        "label":"Français"
    },
    {
        "key": "en",
        "label":"English"
    }
]

//Initialize State
const initState = {
    list: languages,
    current_value: languages[0]["key"],
}

//Define Actions
const LanguageReducer = (state = initState, action) => {
    switch (action.type) {
            
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                current_value: action.payload
            }
        default:
            return state
    }
}

export default LanguageReducer;