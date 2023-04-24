const { Activity, Country } = require('../db');

async function getActivities() {
    
    const activities = await Activity.findAll({
        include: {
            model: Country,
            attributes: ["name"],
            through: { attributes: [] },
        },
    });
    
    return activities;
}

module.exports = getActivities;