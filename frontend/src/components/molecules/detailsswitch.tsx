import { ChevronDownIcon } from '@heroicons/react/20/solid';

type Props = {};

const DetailsSwitch = ({}: Props) => {
  return (
    <div className="flex flex-row cursor-pointer">
      <ChevronDownIcon className="w-5 h-5 mr-2" />
      <p>Details ...</p>
    </div>
  );
};

export default DetailsSwitch;
