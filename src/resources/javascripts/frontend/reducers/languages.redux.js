const initialState = {
    languages: []
}

export default function(languages = initialState, action) {
    switch(action.type) {
        case 'SET_LANGUAGES':
            languages.languages = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(languages));
}
