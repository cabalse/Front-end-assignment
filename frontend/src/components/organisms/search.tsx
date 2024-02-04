import { useContext, useState } from 'react';
import SearchInput from '../molecules/searchinput';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { DataContext } from '../../context/datacontext';

type Props = { className?: string };

const Search = ({ className = '' }: Props) => {
  const dataContext = useContext(DataContext);
  const [inputValue, setInputValue] = useState<string>('');

  const onChange = (value: string) => {
    setInputValue(value);
    dataContext.setFilter(value);
  };

  return (
    <search className="flex-grow relative flex items-center mb-2 xs:mb-0 text-gray-400 focus-within:text-gray-600">
      <MagnifyingGlassIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />
      <SearchInput onChange={onChange} />
    </search>
  );
};

export default Search;
