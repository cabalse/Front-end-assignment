import { StarIcon } from '@heroicons/react/20/solid';

type Props = {
  className?: string;
};

const StarRating = ({}: Props) => {
  return (
    <div className="flex flex-row self-center">
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
      <StarIcon className="w-4 h-4" />
      <StarIcon
        className="w-4 h-4"
        style={{ fill: 'none', strokeWidth: '2', stroke: 'grey' }}
      />
      <StarIcon
        className="w-4 h-4"
        style={{ fill: 'none', strokeWidth: '2', stroke: 'grey' }}
      />
    </div>
  );
};

export default StarRating;
