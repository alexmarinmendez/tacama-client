import { GET_VINOS } from '../actions/names';

const initialState = {
    vinos: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_VINOS: 
            return {
                ...state,
                vinos: action.payload
            }
        default: return state;
    }
}

export default reducer;