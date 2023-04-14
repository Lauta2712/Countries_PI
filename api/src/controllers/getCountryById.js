const { Country, Activity } = require('../db');

async function getCountryById( idPais ){
    if (!idPais) return 'No se encontró el País';
    const country = await Country.findAll({
        where:{ id: idPais },
        include: {
            model: Activity,
            attributes: ['name', 'dificulty', 'duration', 'season'],
                through: {
                    attributes: [],
                }
            }
        })
    return country;
}
module.exports = getCountryById;