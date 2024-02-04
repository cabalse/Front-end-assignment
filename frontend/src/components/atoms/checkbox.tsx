import { useEffect, useState } from 'react';

type Props = {
  label: string;
  selected: boolean;
  onCheckChanged: (selected: boolean) => void;
};

const Checkbox = ({ label, selected, onCheckChanged }: Props) => {
  const [checked, setChecked] = useState(selected);

  useEffect(() => {
    setChecked(selected);
  }, [selected]);

  const onChange = () => {
    setChecked((prevValue) => {
      onCheckChanged(!checked);
      return !prevValue;
    });
  };

  return (
    <div className="flex items-center">
      <input
        id={'checkbox' + label}
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-slant-500 dark:focus:ring-slant-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={'checkbox' + label}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
