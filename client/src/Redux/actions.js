import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_POPULATION = "SORT_BY_POPULATION";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";

// https://restcountries.com/v3/all

export const getCountries = () => {
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type : GET_COUNTRIES,
            payload : response.data
        })
    }
}

export const getByName = (name) => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
        return dispatch({
            type : GET_BY_NAME,
            payload : response.data
        })
    }
}

export const getById = (id) => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type : GET_BY_ID,
            payload : Array.isArray(response.data) ? response.data : [response.data]
        })
    }
}


export const createActivity = (activity) => {
    return async function(dispatch){
        const response = await axios.post(`http://localhost:3001/activities`, activity);
        return dispatch({
            type : CREATE_ACTIVITY,
            payload : response.data
        })
    }
}

export const filterContinent = (continent) => {
    return {
        type: FILTER_CONTINENT,
        payload: continent
    }
}

export const filterActivity = (activity) => {
    return {
        type: FILTER_ACTIVITY,
        payload: activity
    }
}

export const sortByName = (order) => {
    return {
        type: SORT_BY_NAME,
        payload: order
    }
}

export const sortByPopulation = (order) => {
    return {
        type: SORT_BY_POPULATION,
        payload: order
    }
}