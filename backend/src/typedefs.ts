const typeDefs = `
  type movie {
    title: String,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: string[],
    planets: string[],
    starships: string[],
    vehicles: string[],
    species: string[],
    created: string,
    edited: string,
    url: string
  }

  type Query {
    movies: [movie]
  }
`;

export default typeDefs;