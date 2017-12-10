const initialState = {
    tools: []
}

export default function(tools = initialState, action) {
    switch(action.type) {
        case 'SET_TOOLS':
            tools.tools = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(tools));
}
