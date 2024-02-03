import StarRating from '../molecules/starrating';

type Props = {};

const AverageRating = ({}: Props) => {
  return (
    <div className="pt-2 flex flex-row">
      <div>Average rating:</div>
      <StarRating className="ml-3" />
    </div>
  );
};

export default AverageRating;
