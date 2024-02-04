import AverageRatingPart from '../atoms/averageratingpart';

type Props = { className?: string };

const AverageRatingParts = ({ className = '' }: Props) => {
  return (
    <div className="flex flex-row space-x-2 mt-3">
      <AverageRatingPart name={'IMDB'} rating={76} />
      <AverageRatingPart name={'Rotten Tomatoes'} rating={76} />
      <AverageRatingPart name={'Metacritic'} rating={76} />
    </div>
  );
};

export default AverageRatingParts;
