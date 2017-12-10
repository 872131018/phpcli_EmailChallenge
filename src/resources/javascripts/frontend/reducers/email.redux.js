const initialState = {
    emails: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_EMAIL':
            state.emails.push(action.data);
            break;
        case 'CLEAR_EMAILS':
            state.emails = [];
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(state));
}
