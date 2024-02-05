const FetchApi = require('./fetch');
const { swMovieCache, CACHE_KEY } = require('../middleware/swmovie.cache');

const swMovieService = async () => {
  try {
    const result = await FetchApi('https://swapi.dev/api/films/?format=json');
    swMovieCache.set(CACHE_KEY, result);
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  swMovieService,
};
