type Props = { name: string; rating: number; className?: string };

const AverageRatingPart = ({ name, rating }: Props) => {
  return (
    <div className="border rounded-full border-blue-400 text-blue-400 w-fit p-1 px-3 mb-2 md:mb-0">
      {name}: {rating}%
    </div>
  );
};

export default AverageRatingPart;
