const { swMovieService } = require('../services/swmovie.service');

const swMoviesController = async (req, res) => {
  try {
    const data = await swMovieService();
    res.send(data);
    res.status(200);
  } catch (err) {
    res.status(500);
    console.log(err);
    throw err;
  }
};

module.exports = {
  swMoviesController,
};
