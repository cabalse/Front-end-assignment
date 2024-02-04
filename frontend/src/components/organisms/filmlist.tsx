import { useState, useContext } from 'react';

import { DataContext } from '../../context/datacontext';

import Episode from '../atoms/episode';
import ReleaseDate from '../atoms/releasedate';
import Title from '../atoms/title';
import StarRating from '../molecules/starrating';
import Film from '../../models/film';

const FilmList = () => {
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const dataContext = useContext(DataContext);

  const classes = (id: number) => {
    let classes = 'flex flex-row space-x-4 border-b p-4 px-5';
    if (id === selected) {
      classes += ' bg-blue-50';
    }
    return classes;
  };

  const handleClick = (id: number) => {
    setSelected(id);
    dataContext.selectMovie(id);
  };

  return (
    <>
      {dataContext.getMovies().map((film: Film) => (
        <div
          key={film.episode_id}
          onClick={() => handleClick(film.episode_id)}
          className={classes(film.episode_id)}
        >
          <Episode episode={film.episode_id} />
          <Title title={film.title} />
          <StarRating rating={film.rating} />
          <ReleaseDate date={film.release_date} />
        </div>
      ))}
    </>
  );
};

export default FilmList;
