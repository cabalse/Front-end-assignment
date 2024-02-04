import { useState } from 'react';

import DetailContent from '../molecules/detailcontent';
import DetailsSwitch from '../molecules/detailsswitch';
import Film from '../../models/film';

type Props = { film: Film; className?: string };

const Details = ({ film, className = '' }: Props) => {
  const [displayDetails, setDisplayDetails] = useState<boolean>(false);

  const onClick = () => {
    setDisplayDetails((prevValue) => !prevValue);
  };

  return (
    <div className="flex flex-col">
      <DetailsSwitch onClick={onClick} value={displayDetails} />
      {displayDetails && <DetailContent film={film} />}
    </div>
  );
};

export default Details;
