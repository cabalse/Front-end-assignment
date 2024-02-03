import React, { useState } from 'react';

type Props = {
  onChange: (value: string) => void;
};

const SearchInput = ({ onChange }: Props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <input
      type="text"
      name="search"
      placeholder="Type to Search"
      aria-label="Search Movie"
      className="w-full pr-3 pl-10 py-2 flex-grow border-none text-black placeholder-gray-300 ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 rounded p-2"
      onChange={(e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
      }}
      value={inputValue}
    />
  );
};

export default SearchInput;
