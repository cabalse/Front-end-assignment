import SearchInput from '../molecules/searchinput';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

type Props = {};

const Search = ({}: Props) => {
  return (
    <search className="flex-grow relative flex items-center mb-2 xs:mb-0 text-gray-400 focus-within:text-gray-600">
      <MagnifyingGlassIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />
      <SearchInput onChange={(value: string) => {}} />
    </search>
  );
};

export default Search;
