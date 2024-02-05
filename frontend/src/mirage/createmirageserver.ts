import { createServer } from 'miragejs';

import films from './data/films';

const createMirageServer = ({ environment = 'test' }) => {
  createServer({
    environment,
    routes() {
      this.get('/api/getMovies', () => films);
    },
  });
};

export default createMirageServer;
