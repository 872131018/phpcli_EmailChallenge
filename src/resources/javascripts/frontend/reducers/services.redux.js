export default function(loading = 0, action) {
    switch(action.type) {
        case 'SERVICE_LOADING':
            loading++;
            break;
        case 'SERVICE_FINISHED':
            loading--;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(loading));
}
