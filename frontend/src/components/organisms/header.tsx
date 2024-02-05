import { useContext, useState } from 'react';
import Sort from '../molecules/sort';
import Search from './search';
import Checkbox from '../atoms/checkbox';
import { DataContext } from '../../context/datacontext';
import SortOrderType from '../../consts/sortordertypes';

const sortOptions = [
  {
    id: 1,
    label: 'Title [A-Z]',
    sortOrder: { order: 'byTitle', orderType: SortOrderType.ASC },
  },
  {
    id: 2,
    label: 'Title [Z-A]',
    sortOrder: { order: 'byTitle', orderType: SortOrderType.DESC },
  },
  {
    id: 3,
    label: 'Year [1-9]',
    sortOrder: { order: 'byYear', orderType: SortOrderType.ASC },
  },
  {
    id: 4,
    label: 'Year [9-1]',
    sortOrder: { order: 'byYear', orderType: SortOrderType.DESC },
  },
  {
    id: 5,
    label: 'Episode [1-9]',
    sortOrder: { order: 'byEpisode', orderType: SortOrderType.ASC },
  },
  {
    id: 6,
    label: 'Episode [9-1]',
    sortOrder: { order: 'byEpisode', orderType: SortOrderType.DESC },
  },
];

const Header = () => {
  const dataContext = useContext(DataContext);
  const [selected, setSelected] = useState<number>(0);
  const [trueSWSelected, setTrueSWSelected] = useState(true);
  const [sortPanelClasses, setSortPanelClasses] = useState<string>('hidden');

  const handleSortClick = () => {
    setSortPanelClasses((prevValue) => {
      if (prevValue !== 'hidden') {
        return 'hidden';
      } else {
        return 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-2 mx-2';
      }
    });
  };

  const handleSortSelected = (selected: boolean, id: number) => {
    if (selected) {
      setSelected(id);
      dataContext.setSortOrder(
        sortOptions[id - 1].sortOrder.order,
        sortOptions[id - 1].sortOrder.orderType
      );
    } else {
      setSelected(0);
      dataContext.resetSortOrder();
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 shadow-md shadow-black/5 p-4">
      <div className="w-full flex flex-no-wrap flex-col xs:flex-row flex-col-reverse space-x-0 xs:space-x-4 relative">
        <Sort onClick={handleSortClick} />
        <Search />
      </div>
      <div key="sortpanel" className={sortPanelClasses}>
        {sortOptions.map((option) => (
          <Checkbox
            key={option.id}
            label={option.label}
            selected={selected === option.id}
            onCheckChanged={(selected) => {
              handleSortSelected(selected, option.id);
            }}
          />
        ))}
        <Checkbox
          key={'trueSW'}
          label={'True SW Only'}
          selected={trueSWSelected}
          onCheckChanged={(selected) => {
            setTrueSWSelected((prevValue) => {
              dataContext.setOnlyTrueSW(!prevValue);
              return !prevValue;
            });
          }}
        />
      </div>
    </div>
  );
};

export default Header;
