import SortOrderType from '../consts/sortordertypes';

type SortOrder = {
  byYear: SortOrderType | null;
  byTitle: SortOrderType | null;
  byEpisode: SortOrderType | null;
};

export default SortOrder;
