const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const getCountryByName = async (name) => {
    const country = await Country.findOne({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        include: {
            model: Activity,
                through: { attributes: [] } 
            }
        });
        return (country);
    };
    

module.exports = getCountryByName;