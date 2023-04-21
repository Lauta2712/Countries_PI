import {GET_COUNTRIES} from './actions';
import { GET_BY_NAME } from './actions';
import { GET_BY_ID } from './actions';
import { CREATE_ACTIVITY } from './actions';

let initialState = {
    allCountries: [],
    countriesDetail: [],
    allCountriesCopy: [],
    allActivities: []
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                //allCountriesCopy: action.payload 
            }
        case GET_BY_NAME: 
            return {
                ...state,
                allCountries: action.payload //Cambié esto haciendo la SearchBar
            }
        case GET_BY_ID: 
            return {
                ...state,
                countriesDetail: action.payload
            }
        case CREATE_ACTIVITY:
            return {
                ...state,
                countriesDetail: [...state.countriesDetail, action.payload]
            }
        default:
            return state;
    }
}

export default rootReducer;