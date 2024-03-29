import { useContext } from 'react';

import { DataContext } from '../../context/datacontext';
import Director from '../atoms/director';
import PlotText from '../atoms/plottext';
import Title from '../atoms/title';
import AverageRating from '../organisms/averageraiting';
import AverageRatingParts from './averageratingparts';
import SelectedMovieImage from './selectedmovieimage';

const SelectedMovieDetails = () => {
  const dataContext = useContext(DataContext);
  const selectedMovie = dataContext.getSelectedMovie();

  if (!selectedMovie) {
    return (
      <div className="flex flex-col p-4">
        <p className="text-2xl font-bold">Star Wars Movie Application</p>
        <div>
          Please select one of the movies on the left side to see the details!
        </div>
      </div>
    );
  } else {
    return (
      <section className="basis-1/2 flex flex-col p-4">
        <Title title={selectedMovie.title} type="large" />
        <div className="flex flex-row pt-2">
          <SelectedMovieImage
            url={selectedMovie.image}
            alt={selectedMovie.title}
          />
          <PlotText text={selectedMovie.opening_crawl} />
        </div>
        <Director text={selectedMovie.director} />
        <AverageRating rating={selectedMovie.rating} />
        <AverageRatingParts ratings={selectedMovie.ratings} />
      </section>
    );
  }
};

export default SelectedMovieDetails;
