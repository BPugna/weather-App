let initialState = {
    buscados: [],
    actual: ""
}

export function rootReducer(state = initialState, action){
    switch(action.type){
        case "SEARCH_PLACE":
            return {
                buscados: [...state.buscados, action.payload],
                actual: action.payload
            }
        case "CHANGE_ACTUAL":
            let aux = state.buscados.find(el => el.id === action.payload)
            return {
                ...state,
                actual: aux
            }
        case "DELETE_CARD":
            let filt = state.buscados.filter(el => el.id !== action.payload)
            let auxx = filt.find(el => el.id === state.actual.id)
            let aux2;
            if(!auxx){
                if(filt.length){
                    aux2 = filt[0];
                } else filt = []
            }
            return {
                buscados: filt,
                actual: (auxx ? auxx : aux2) 
            }
        default:
            return state;
    }
}