import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";

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
            payload : response.data
        })
    }
}