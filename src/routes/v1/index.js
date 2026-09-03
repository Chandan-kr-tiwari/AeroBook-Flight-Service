const express = require('express');

const { InfoController, AirportController } = require('../../controllers');

const airplaneRoutes = require('./airplane-router')

const cityRoutes = require('./ city-routes')

const airportRoutes = require('./airport-routes');

const router = express.Router();

router.use('/airplanes' , airplaneRoutes)
router.use('/city',cityRoutes)
router.use('/airports',airportRoutes)
router.get('/info', InfoController.info);


module.exports = router;