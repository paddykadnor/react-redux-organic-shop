export const catReducer = (state = null, action) => {
    switch (action.type) {
        case "API_START_CAT" : 
            return state;
        case "API_SUCCESS_CAT" : 
            return action.data;
        case "API_ERROR_CAT" : 
            return state;
        default: return state;
    }
}





