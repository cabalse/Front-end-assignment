const { Router } = require('express');

const { swMoviesController } = require('../controllers/swmovies.controller');
const { swMovieCacheMiddleware } = require('../middleware/swmovie.cache');
const { moviesController } = require('../controllers/movies.controller');

const router = Router();

router.get('/api/getswmovies', swMovieCacheMiddleware, swMoviesController);

router.get('/api/getmovies', moviesController);

module.exports = router;
