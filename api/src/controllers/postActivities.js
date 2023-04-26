const { Activity, Country } = require('../db');

const postActivities = async ({name, dificulty, duration, season, countries}) => {
    
    if (!countries || countries.length === 0) {
        throw new Error("La actividad debe tener al menos un país asociado");
    }

    const existingCountries = await Country.findAll({ where: { id: countries } });
    
    if (existingCountries.length !== countries.length) {
        throw new Error("Uno o más países no existen");
    }
    
    const newActivity = await Activity.create({name, dificulty, duration, season});
    
    await newActivity.setCountries(countries);
    
    return newActivity;
};

module.exports = postActivities;