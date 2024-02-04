import StarRating from '../molecules/starrating';

type Props = { rating: number; className?: string };

const AverageRating = ({ rating, className = '' }: Props) => {
  return (
    <div className="pt-2 flex flex-row">
      <div>Average rating:</div>
      <StarRating rating={rating} className="ml-3" />
    </div>
  );
};

export default AverageRating;
