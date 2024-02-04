const films = {
  count: 3,
  next: null,
  previous: null,
  results: [
    {
      title: 'A New Hope',
      episode_id: 4,
      opening_crawl: `It is a period of civil war.
  Rebel spaceships, striking
  from a hidden base, have won
  their first victory against
  the evil Galactic Empire.
  
  During the battle, Rebel
  spies managed to steal secret
  plans to the Empire's
  ultimate weapon, the DEATH
  STAR, an armored space
  station with enough power
  to destroy an entire planet.
  
  Pursued by the Empire's
  sinister agents, Princess
  Leia races home aboard her
  starship, custodian of the
  stolen plans that can save her
  people and restore
  freedom to the galaxy....`,
      director: 'George Lucas',
      producer: 'Gary Kurtz, Rick McCallum',
      release_date: '1977-05-25',
      characters: [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/people/2/',
        'https://swapi.dev/api/people/3/',
        'https://swapi.dev/api/people/4/',
        'https://swapi.dev/api/people/5/',
        'https://swapi.dev/api/people/6/',
        'https://swapi.dev/api/people/7/',
        'https://swapi.dev/api/people/8/',
        'https://swapi.dev/api/people/9/',
        'https://swapi.dev/api/people/10/',
        'https://swapi.dev/api/people/12/',
        'https://swapi.dev/api/people/13/',
        'https://swapi.dev/api/people/14/',
        'https://swapi.dev/api/people/15/',
        'https://swapi.dev/api/people/16/',
        'https://swapi.dev/api/people/18/',
        'https://swapi.dev/api/people/19/',
        'https://swapi.dev/api/people/81/',
      ],
      planets: [
        'https://swapi.dev/api/planets/1/',
        'https://swapi.dev/api/planets/2/',
        'https://swapi.dev/api/planets/3/',
      ],
      starships: [
        'https://swapi.dev/api/starships/2/',
        'https://swapi.dev/api/starships/3/',
        'https://swapi.dev/api/starships/5/',
        'https://swapi.dev/api/starships/9/',
        'https://swapi.dev/api/starships/10/',
        'https://swapi.dev/api/starships/11/',
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/13/',
      ],
      vehicles: [
        'https://swapi.dev/api/vehicles/4/',
        'https://swapi.dev/api/vehicles/6/',
        'https://swapi.dev/api/vehicles/7/',
        'https://swapi.dev/api/vehicles/8/',
      ],
      species: [
        'https://swapi.dev/api/species/1/',
        'https://swapi.dev/api/species/2/',
        'https://swapi.dev/api/species/3/',
        'https://swapi.dev/api/species/4/',
        'https://swapi.dev/api/species/5/',
      ],
      created: '2014-12-10T14:23:31.880000Z',
      edited: '2014-12-20T19:49:45.256000Z',
      url: 'https://swapi.dev/api/films/1/',
      rating: 9,
      ratings: [
        { name: 'IMDB', rating: 8 },
        { name: 'Rotten Tomatoes', rating: 9 },
        { name: 'Metacritic', rating: 10 },
      ],
      image:
        'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg',
    },
    {
      title: 'The Empire Strikes Back',
      episode_id: 5,
      opening_crawl: `It is a dark time for the
  Rebellion. Although the Death
  Star has been destroyed,
  Imperial troops have driven the
  Rebel forces from their hidden
  base and pursued them across
  the galaxy.
  
  Evading the dreaded Imperial
  Starfleet, a group of freedom
  fighters led by Luke Skywalker
  has established a new secret
  base on the remote ice world
  of Hoth.
  
  The evil lord Darth Vader,
  obsessed with finding young
  Skywalker, has dispatched
  thousands of remote probes into
  the far reaches of space....`,
      director: 'Irvin Kershner',
      producer: 'Gary Kurtz, Rick McCallum',
      release_date: '1980-05-17',
      characters: [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/people/2/',
        'https://swapi.dev/api/people/3/',
        'https://swapi.dev/api/people/4/',
        'https://swapi.dev/api/people/5/',
        'https://swapi.dev/api/people/10/',
        'https://swapi.dev/api/people/13/',
        'https://swapi.dev/api/people/14/',
        'https://swapi.dev/api/people/18/',
        'https://swapi.dev/api/people/20/',
        'https://swapi.dev/api/people/21/',
        'https://swapi.dev/api/people/22/',
        'https://swapi.dev/api/people/23/',
        'https://swapi.dev/api/people/24/',
        'https://swapi.dev/api/people/25/',
        'https://swapi.dev/api/people/26/',
      ],
      planets: [
        'https://swapi.dev/api/planets/4/',
        'https://swapi.dev/api/planets/5/',
        'https://swapi.dev/api/planets/6/',
        'https://swapi.dev/api/planets/27/',
      ],
      starships: [
        'https://swapi.dev/api/starships/3/',
        'https://swapi.dev/api/starships/10/',
        'https://swapi.dev/api/starships/11/',
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/15/',
        'https://swapi.dev/api/starships/17/',
        'https://swapi.dev/api/starships/21/',
        'https://swapi.dev/api/starships/22/',
        'https://swapi.dev/api/starships/23/',
      ],
      vehicles: [
        'https://swapi.dev/api/vehicles/8/',
        'https://swapi.dev/api/vehicles/14/',
        'https://swapi.dev/api/vehicles/16/',
        'https://swapi.dev/api/vehicles/18/',
        'https://swapi.dev/api/vehicles/19/',
        'https://swapi.dev/api/vehicles/20/',
      ],
      species: [
        'https://swapi.dev/api/species/1/',
        'https://swapi.dev/api/species/2/',
        'https://swapi.dev/api/species/3/',
        'https://swapi.dev/api/species/6/',
        'https://swapi.dev/api/species/7/',
      ],
      created: '2014-12-12T11:26:24.656000Z',
      edited: '2014-12-15T13:07:53.386000Z',
      url: 'https://swapi.dev/api/films/2/',
      rating: 10,
      ratings: [
        { name: 'IMDB', rating: 1 },
        { name: 'Rotten Tomatoes', rating: 2 },
        { name: 'Metacritic', rating: 3 },
      ],
    },
    {
      title: 'Return of the Jedi',
      episode_id: 6,
      opening_crawl: `Luke Skywalker has returned to
  his home planet of Tatooine in
  an attempt to rescue his
  friend Han Solo from the
  clutches of the vile gangster
  Jabba the Hutt.
  
  Little does Luke know that the
  GALACTIC EMPIRE has secretly
  begun construction on a new
  armored space station even
  more powerful than the first
  dreaded Death Star.
  
  When completed, this ultimate
  weapon will spell certain doom
  for the small band of rebels
  struggling to restore freedom
  to the galaxy...`,
      director: 'Richard Marquand',
      producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
      release_date: '1983-05-25',
      characters: [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/people/2/',
        'https://swapi.dev/api/people/3/',
        'https://swapi.dev/api/people/4/',
        'https://swapi.dev/api/people/5/',
        'https://swapi.dev/api/people/10/',
        'https://swapi.dev/api/people/13/',
        'https://swapi.dev/api/people/14/',
        'https://swapi.dev/api/people/16/',
        'https://swapi.dev/api/people/18/',
        'https://swapi.dev/api/people/20/',
        'https://swapi.dev/api/people/21/',
        'https://swapi.dev/api/people/22/',
        'https://swapi.dev/api/people/25/',
        'https://swapi.dev/api/people/27/',
        'https://swapi.dev/api/people/28/',
        'https://swapi.dev/api/people/29/',
        'https://swapi.dev/api/people/30/',
        'https://swapi.dev/api/people/31/',
        'https://swapi.dev/api/people/45/',
      ],
      planets: [
        'https://swapi.dev/api/planets/1/',
        'https://swapi.dev/api/planets/5/',
        'https://swapi.dev/api/planets/7/',
        'https://swapi.dev/api/planets/8/',
        'https://swapi.dev/api/planets/9/',
      ],
      starships: [
        'https://swapi.dev/api/starships/2/',
        'https://swapi.dev/api/starships/3/',
        'https://swapi.dev/api/starships/10/',
        'https://swapi.dev/api/starships/11/',
        'https://swapi.dev/api/starships/12/',
        'https://swapi.dev/api/starships/15/',
        'https://swapi.dev/api/starships/17/',
        'https://swapi.dev/api/starships/22/',
        'https://swapi.dev/api/starships/23/',
        'https://swapi.dev/api/starships/27/',
        'https://swapi.dev/api/starships/28/',
        'https://swapi.dev/api/starships/29/',
      ],
      vehicles: [
        'https://swapi.dev/api/vehicles/8/',
        'https://swapi.dev/api/vehicles/16/',
        'https://swapi.dev/api/vehicles/18/',
        'https://swapi.dev/api/vehicles/19/',
        'https://swapi.dev/api/vehicles/24/',
        'https://swapi.dev/api/vehicles/25/',
        'https://swapi.dev/api/vehicles/26/',
        'https://swapi.dev/api/vehicles/30/',
      ],
      species: [
        'https://swapi.dev/api/species/1/',
        'https://swapi.dev/api/species/2/',
        'https://swapi.dev/api/species/3/',
        'https://swapi.dev/api/species/5/',
        'https://swapi.dev/api/species/6/',
        'https://swapi.dev/api/species/8/',
        'https://swapi.dev/api/species/9/',
        'https://swapi.dev/api/species/10/',
        'https://swapi.dev/api/species/15/',
      ],
      created: '2014-12-18T10:39:33.255000Z',
      edited: '2014-12-20T09:48:37.462000Z',
      url: 'https://swapi.dev/api/films/3/',
      rating: 8,
      image:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
  ],
};

export default films;
