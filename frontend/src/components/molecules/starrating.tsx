import { StarIcon } from '@heroicons/react/20/solid';

type Props = {
  rating: number;
  maxRating?: number;
  className?: string;
};

const StarRating = ({ rating, maxRating = 10, className = '' }: Props) => {
  const raitings = [...Array(rating).keys()];
  const fills = [...Array(maxRating - rating).keys()];

  return (
    <div className="flex flex-row self-center">
      {raitings.map((i) => (
        <StarIcon key={i} className="w-4 h-4" />
      ))}
      {fills.map((i) => (
        <StarIcon
          key={i}
          className="w-4 h-4"
          style={{ fill: 'none', strokeWidth: '2', stroke: 'grey' }}
        />
      ))}
    </div>
  );
};

export default StarRating;
