const Cache = require('node-cache');
const swMovieCache = new Cache({ stdTTL: 60 * 5 });

const CACHE_KEY = 'swMoviesList';

const swMovieCacheMiddleware = (req, res, next) => {
  try {
    if (swMovieCache.has(CACHE_KEY)) {
      return res.send(swMovieCache.get(CACHE_KEY)).status(200);
    }
    return next();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  swMovieCacheMiddleware,
  swMovieCache,
  CACHE_KEY,
};
