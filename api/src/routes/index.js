const { Router } = require('express');
const getCountries = require('../controllers/getCountries');
const getCountryById = require('../controllers/getCountryById');
const getCountryByName = require('../controllers/getCountryByName');
const getActivities = require('../controllers/getActivities');
const postActivities = require('../controllers/postActivities')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routes.get('/countries', (req, res) => {
    const { name } = req.query;
    
    let promise;
    if (name) {
        promise = getCountryByName(name);
    } else {
        promise = getCountries();
    }
    
    promise.then((data) => {
        res.status(200).send(data);
    })
    .catch((error) => {
        res.status(500).json({ error: error.message });
    });
    });
    

    routes.get('/countries/:idPais', async (req, res) => {
        const {idPais} = req.params;
        try {
            const countryDetail = await getCountryById(idPais);
        res.status(200).json(countryDetail)
    } catch (error) {
        console.log(error);
        res.status(500).json({error : error.message})
    }
})

routes.post('/activities', async (req, res) => {
    try {
        const {name, dificulty, duration, season, countries} = req.body;
        let activityCreated = await postActivities({name, dificulty, duration, season, countries})
        res.status(200).json(activityCreated)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error : error.message })
    }
} )

routes.get('/activities', async (req, res) => {
    try {
        let activities = await getActivities();
        res.status(200).json(activities);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error : error.message})
    }
})

module.exports = routes;

// routes.get('/countries', async (req, res) => {
//     const { name } = req.query;
//     try {
//         if (name) {
//             const queryName = await getCountryByName(name);
//             res.status(200).send(queryName);
//         } else {
//             const allCountries = await getCountries();
//             res.status(200).send(allCountries);
//         }
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// })