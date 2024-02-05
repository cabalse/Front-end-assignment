const { movieService } = require('../services/movie.service');

const moviesController = async (req, res) => {
  try {
    const data = await movieService();
    res.send(data);
    res.status(200);
  } catch (err) {
    res.status(500);
    console.log(err);
    throw err;
  }
};

module.exports = {
  moviesController,
};
