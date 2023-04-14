const { Activity } = require('../db');

const postActivities = async ({name, dificulty, duration, season, countries}) => {
    const existingActivity = await Activity.findOne({ where: { name } });
    
    if (existingActivity) {
        throw new Error("Actividad existente");
    }
    
    if (!countries || countries.length === 0) {
        throw new Error("La actividad debe tener al menos un país asociado");
    }
    
    const newActivity = await Activity.create({name, dificulty, duration, season});
    
    await newActivity.setCountries(countries);
    
    return newActivity;
};

module.exports = postActivities;