import Rating from '../../models/rating';
import AverageRatingPart from '../atoms/averageratingpart';

type Props = { ratings: Rating[]; className?: string };

const AverageRatingParts = ({ ratings, className = '' }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row space-x-0 sm:space-x-2 md:space-x-0 xl:space-x-2 space-y-2 sm:space-y-0 md:space-y-2 xl:space-y-0 mt-3">
      {ratings
        ? ratings.map((rating) => (
            <AverageRatingPart
              key={rating.source}
              name={rating.source}
              rating={rating.value}
            />
          ))
        : null}
    </div>
  );
};

export default AverageRatingParts;
