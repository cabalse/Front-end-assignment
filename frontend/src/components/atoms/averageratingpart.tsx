type Props = { name: string; rating: string; className?: string };

const AverageRatingPart = ({ name, rating }: Props) => {
  return (
    <div className="border rounded-full border-blue-400 text-blue-400 w-fit p-1 px-3 ">
      {name}: {rating}
    </div>
  );
};

export default AverageRatingPart;
