import { createServer } from 'miragejs';

import films from './data/films';

const createMirageServer = () => {
  createServer({
    environment: 'test',
    routes() {
      this.get('/api/getMovies', () => films);
    },
  });
};

export default createMirageServer;
