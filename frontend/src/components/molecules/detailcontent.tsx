import Film from '../../models/film';
import Director from '../atoms/director';
import Image from '../atoms/image';
import PlotText from '../atoms/plottext';
import AverageRatingParts from './averageratingparts';

type Props = { film: Film; className?: string };

const DetailContent = ({ film, className = '' }: Props) => {
  return (
    <>
      <div className="mt-2 text-justify flex flex-col md:flex-row ">
        <div className="flex justify-center">
          <Image url={film.image} alt={film.title} />
        </div>
        <PlotText text={film.opening_crawl} type="clean" />
      </div>
      <div>
        <Director text={film.director} />
        <AverageRatingParts ratings={film.ratings} />
      </div>
    </>
  );
};

export default DetailContent;
