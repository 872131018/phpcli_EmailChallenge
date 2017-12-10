const initialState = {
    name: '',
    email: '',
    message: '',
    likes: false
}

export default function(form = initialState, action) {
    switch(action.type) {
        case 'SET_NAME':
            form.name = action.data;
            break;
        case 'SET_EMAIL':
            form.email = action.data;
            break;
        case 'SET_MESSAGE':
            form.message = action.data;
            break;
        case 'SET_LIKES':
            form.likes = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(form));
}
