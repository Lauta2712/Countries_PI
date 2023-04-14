const { Activity } = require('../db');

async function getActivities() {
    
    let activities = await Activity.findAll();
    
    return activities;
}

module.exports = getActivities;