import { useContext } from 'react';

import { DataContext } from '../../context/datacontext';
import Film from '../../models/film';
import Episode from '../atoms/episode';
import Title from '../atoms/title';
import StarRating from '../molecules/starrating';
import ReleaseDate from '../atoms/releasedate';
import Details from './details';

const MobileFilmList = () => {
  const dataContext = useContext(DataContext);
  return (
    <>
      {dataContext.getMovies().map((film: Film) => (
        <section
          key={film.episode_id}
          className="flex flex-col mx-4 my-1 border border-slate-200 rounded bg-slate-50 p-2"
        >
          <div className="flex justify-between">
            <Episode episode={film.episode_id} className="hidden" />
            <Title title={film.title} />
          </div>
          <div className="flex justify-between">
            <StarRating rating={film.rating} />
            <ReleaseDate date={film.release_date} />
          </div>
          <Details film={film} />
        </section>
      ))}
    </>
  );
};

export default MobileFilmList;
