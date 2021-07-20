const reducer = (state, action) => {
    switch(action.type){
        case 'SET_CAMPO':
            return {
                ...state,
                campos: action.payload
            }
        default:
            return state;
    }
    
}

export default reducer;