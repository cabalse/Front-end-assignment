const express = require('express');
const cors = require('cors');

const settings = require('./settings');
const standardRoute = require('./routes/standardroute');
const movieRoutes = require('./routes/movieroutes');

const port = settings.port;

const app = express();

app.use(express.json());
app.use(cors());
app.use(standardRoute);
app.use(movieRoutes);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
