import {GET_COUNTRIES} from './actions';
import { GET_BY_NAME } from './actions';
import { GET_BY_ID } from './actions';

let initialState = {
    allCountries: [],
    countriesDetail: [],
    countriesCopy : []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                countriesCopy: action.payload 
            }
        case GET_BY_NAME: 
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_BY_ID: 
            return {
                ...state,
                countriesDetail: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;