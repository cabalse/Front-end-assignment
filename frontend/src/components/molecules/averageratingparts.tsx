import Rating from '../../models/rating';
import AverageRatingPart from '../atoms/averageratingpart';

type Props = { ratings: Rating[]; className?: string };

const AverageRatingParts = ({ ratings, className = '' }: Props) => {
  return (
    <div className="flex md:flex-row flex-col md:space-x-2 mt-3">
      {ratings
        ? ratings.map((rating) => (
            <AverageRatingPart
              key={rating.name}
              name={rating.name}
              rating={rating.rating}
            />
          ))
        : null}
    </div>
  );
};

export default AverageRatingParts;
