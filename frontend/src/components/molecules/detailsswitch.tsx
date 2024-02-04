import { useState, useEffect } from 'react';

import { ChevronDownIcon } from '@heroicons/react/20/solid';

type Props = {
  onClick: () => void;
  value: boolean;
  className?: string;
};

const DetailsSwitch = ({ onClick, value, className = '' }: Props) => {
  const [showDetails, setShowDetails] = useState<boolean>(value);

  useEffect(() => {
    setShowDetails(value);
  }, [value]);

  return (
    <div className="flex flex-row cursor-pointer" onClick={() => onClick()}>
      {showDetails ? (
        <ChevronDownIcon className="w-5 h-5 mr-2" />
      ) : (
        <ChevronDownIcon className="w-5 h-5 mr-2" />
      )}
      <p>Details ...</p>
    </div>
  );
};

export default DetailsSwitch;
