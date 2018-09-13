export const proReducer = (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case "API_START_PRO" : 
            return state;
        case "API_SUCCESS_PRO" : 
            return action.data;
        case "API_ERROR_PRO" : 
            return state;
        default: return state;
    }
}