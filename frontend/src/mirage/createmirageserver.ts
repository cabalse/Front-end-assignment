import { Registry, Server, createServer } from 'miragejs';

import films from './data/films';
import { AnyFactories, AnyModels } from 'miragejs/-types';

const createMirageServer = ({
  environment = 'test',
}): Server<Registry<AnyModels, AnyFactories>> => {
  return createServer({
    environment,
    routes() {
      this.get('/api/getMovies', () => films);
    },
  });
};

export default createMirageServer;
