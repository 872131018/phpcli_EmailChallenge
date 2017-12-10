const initialState = {
    contents: []
}

export default function(contents = initialState, action) {
    switch(action.type) {
        case 'SET_CONTENTS':
            contents.contents = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(contents));
}
