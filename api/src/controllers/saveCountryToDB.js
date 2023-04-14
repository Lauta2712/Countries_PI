const axios = require("axios");
const { Country } = require('../db');

const countryShape = (data) => {
    return {
        id : data.cca3,
        name : data.name.common,
        flag : data.flag,
        region : data.region,
        capital : data.capital,
        subregion : data.subregion,
        area : data.area,
        population : data.population
    }
};

const saveCountryToDB = async() => {
    try {
        const allCountries = await axios.get('https://restcountries.com/v3/all');
        const response = allCountries.data;
        const createCountries = response.map( (data) => countryShape(data) );
        await Country.bulkCreate(createCountries);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { saveCountryToDB }