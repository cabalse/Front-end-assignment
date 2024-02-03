import DetailContent from '../molecules/detailcontent';
import DetailsSwitch from '../molecules/detailsswitch';

type Props = {};

const Details = ({}: Props) => {
  return (
    <div className="flex flex-col">
      <DetailsSwitch />
      <DetailContent />
    </div>
  );
};

export default Details;
