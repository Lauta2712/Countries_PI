import {GET_COUNTRIES} from './actions';
import { GET_BY_NAME } from './actions';
import { GET_BY_ID } from './actions';
import { CREATE_ACTIVITY, GET_ACTIVITIES } from './actions';
import { FILTER_CONTINENT, FILTER_ACTIVITY, SORT_BY_NAME, SORT_BY_POPULATION } from './actions';

let initialState = {
    allCountries: [],
    countriesDetail: [],
    allCountriesCopy: [],
    allActivities: [],
    searchResults: [],
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
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
        case CREATE_ACTIVITY:
            return {
                ...state,
                countriesDetail: [...state.countriesDetail, action.payload],
                allActivities: action.payload
            }
        case GET_ACTIVITIES: 
            return {
                ...state,
                allActivities: action.payload,
                allCountries: [...state.allCountries, action.payload]
            }
            case FILTER_CONTINENT:
                const filteredCountries = state.allCountries.filter(
                    (country) => country.region === action.payload
                );
                return {
                    ...state,
                    searchResults: filteredCountries,
                };
        
                case FILTER_ACTIVITY:
                    const filteredByActivity = state.allCountries.filter((country) =>
                        country.Activities.some((activity) => activity.name === action.payload)
                    );
                    return {
                        ...state,
                        searchResults: filteredByActivity,
                    };
        
            case SORT_BY_NAME:
                const sortedByName = [...state.allCountries].sort((a, b) => {
                if (action.payload === "asc") {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
                });
                return {
                    ...state,
                    allCountries: sortedByName,
                };
            
            case SORT_BY_POPULATION:
                const sortedByPopulation = [...state.allCountries].sort((a, b) => {
                if (action.payload === "asc") {
                    return a.population - b.population;
                } else {
                    return b.population - a.population;
                }
            });
                return {
                    ...state,
                    allCountries: sortedByPopulation,
                };
        default:
            return state;
    }
}

export default rootReducer;

//* TERNARIO => algo ? () : ()

