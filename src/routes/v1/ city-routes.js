const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');

const router = express.Router();

// POST /api/v1/cities
router.post(
    '/',
    CityMiddlewares.validateCreateRequest,
    CityController.createCity
);

// GET /api/v1/cities
router.get(
    '/',
    CityController.getAllCities
);

// GET /api/v1/cities/:id
router.get(
    '/:id',
    CityController.getCity
);

// PATCH /api/v1/cities/:id
router.patch(
    '/:id',
    CityController.updateCity
);

// DELETE /api/v1/cities/:id
router.delete(
    '/:id',
    CityController.destroyCity
);

module.exports = router;