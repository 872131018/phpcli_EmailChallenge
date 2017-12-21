const initialState = {
    emails: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_EMAIL':
            if(action.data instanceof Array) {
                for(let email of action.data) {
                    state.emails.push(email);
                }
            } else {
                state.emails.push(action.data);
            }
            break;
        case 'CLEAR_EMAILS':
            state.emails = [];
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(state));
}
