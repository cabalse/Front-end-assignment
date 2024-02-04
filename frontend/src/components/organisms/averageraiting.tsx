import StarRating from '../molecules/starrating';

type Props = { className?: string };

const AverageRating = ({ className = '' }: Props) => {
  return (
    <div className="pt-2 flex flex-row">
      <div>Average rating:</div>
      <StarRating className="ml-3" />
    </div>
  );
};

export default AverageRating;
