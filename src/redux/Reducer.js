import {  ADD_TO_ARRAY } from "./Action";

const initialState = {
    values: [],
};

const expenditureReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_ARRAY:
            return {
                ...state, 
                values: [...state.values, action.payload] 
              };
        default:
            return state;
    }
};

export default expenditureReducer;
