const settings = require('../settings');
const FetchApi = require('./fetch');

const omdbService = async (title, year) => {
  try {
    const titleClean = title.replace(/ /g, '+');
    const result = await FetchApi(
      `https://www.omdbapi.com/?apikey=${settings.omdbApiKey}&t=${titleClean}&y=${year}`
    );
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  omdbService,
};
