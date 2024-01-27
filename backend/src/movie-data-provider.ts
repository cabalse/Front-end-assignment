import Cache from './cache';
import Movie from './movie';
import SWAPIRResult from './swapirresult';

class MovieDataProvider {
    cacheKey;
    cache;
    ttl;

    constructor() {
        this.cache = Cache<Movie[]>({});
        this.cacheKey = "move-data";
        this.ttl = 100;
    }

    async data(callback: (data: Movie[]) => void) {
        const data = this.cache.get(this.cacheKey);
    
        if (data == undefined) {
            fetch("https://swapi.dev/api/films/?format=json")
            .then(async (response:Response) => {
                let res = await response.json() as SWAPIRResult;
                let movies = res.results as Movie[];
                this.cache.set(this.cacheKey, movies, this.ttl);
                callback(movies);
            })
            .catch(function (err) {
              console.log("Unable to fetch -", err);
            });
          } else {
          callback(data);
        }
      }
}

export default MovieDataProvider;