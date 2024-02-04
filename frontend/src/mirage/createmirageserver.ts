import { createServer } from 'miragejs';

import films from './data/films';

const createMirageServer = () => {
  createServer({
    environment: 'test',
    routes() {
      this.get('/api/films', () => films);
    },
  });
};

export default createMirageServer;
