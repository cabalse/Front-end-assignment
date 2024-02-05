const moment = require('moment');

const settings = require('../settings');
const FetchApi = require('./fetch');
const { omdbService } = require('./omdb.service');

function convertRating(string) {
  if (string.includes('%')) {
    return parseFloat(string.replace('%', ''));
  }
  if (string.includes('/100')) {
    return parseInt(string.split('/')[0]);
  }
  if (string.includes('/10')) {
    return parseFloat(string.split('/')[0]) * 10;
  }
  return 0;
}

function roundTenth(num) {
  return Math.round(num / 10);
}

function calcAverageRating(ratings) {
  let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
    const rating = convertRating(ratings[i].Value);
    sum += rating;
  }
  return roundTenth(sum / ratings.length);
}

const movieService = async () => {
  try {
    const result = await FetchApi(
      `http://127.0.0.1:${settings.port}/api/getSWMovies`
    );
    const ret = [];

    for (let i = 0; i < result.results.length; i++) {
      const currMovie = result.results[i];
      const year = moment(currMovie.release_date).format('YYYY');
      const omdb = await omdbService(currMovie.title.toLowerCase(), year);
      const movie = {
        ...result.results[i],
        image: omdb.Poster,
        rating: calcAverageRating(omdb.Ratings),
        ratings: omdb.Ratings,
      };
      ret.push(movie);
    }

    return ret;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  movieService,
};
