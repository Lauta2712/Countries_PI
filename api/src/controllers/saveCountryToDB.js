const axios = require("axios");
const { Country } = require('../db');

const countryShape = (data) => {
    return {
        id : data.cca3,
        name : data.name.common || 'No name',
        flags : data.flags[1] || 'No flag',
        region : data.region || 'No continent',
        capital : data.capital?.[0] || 'No capital',
        subregion : data.subregion || 'No subregion',
        area : data.area || 0,
        population : data.population || 0
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