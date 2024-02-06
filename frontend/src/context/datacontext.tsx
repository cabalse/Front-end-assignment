import { useState, createContext, ReactNode } from 'react';
import Film from '../models/film';
import FilmsProvider from '../dataprovider/filmsprovider';
import SortOrder from '../models/sortorder';
import SortOrderType from '../consts/sortordertypes';
import moment from 'moment';

type Props = {
  children?: ReactNode;
};

type DataContextType = {
  getMovies: () => Film[];
  selectedMovie: number | null;
  getData: (url: string) => void;
  selectMovie: (id: number | null) => void;
  getSelectedMovie: () => Film | undefined;
  setFilter: (filter: string) => void;
  setSortOrder: (order: string, orderType: SortOrderType) => void;
  setOnlyTrueSW: (onlyTrueSW: boolean) => void;
  resetSortOrder: VoidFunction;
  isLoading: boolean;
};

const defaultContext: DataContextType = {
  getMovies: () => [],
  selectedMovie: null,
  getData: (url: string) => null,
  selectMovie: (id: number | null) => null,
  getSelectedMovie: () => undefined,
  setFilter: (filter: string) => null,
  setSortOrder: (order: string, orderType: SortOrderType) => null,
  setOnlyTrueSW: (onlyTrueSW: boolean) => null,
  resetSortOrder: () => null,
  isLoading: false,
};

const DataContext = createContext<DataContextType>(defaultContext);

const DataContextProvider = ({ children }: Props) => {
  const [data, setData] = useState<Film[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('');
  const [order, setOrder] = useState<SortOrder>({
    byYear: null,
    byEpisode: null,
    byTitle: null,
  });
  const [onlyTrueSW, setOnlyTrueSW] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = (url: string) => {
    setIsLoading(true);
    FilmsProvider(url)
      .then((data: Film[]) => {
        setData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const selectMovie = (id: number | null) => {
    setSelectedMovie(id);
  };

  const getSelectedMovie = () => {
    return data.find((film: Film) => film.episode_id === selectedMovie);
  };

  const setSortOrder = (order: string, orderType: SortOrderType) => {
    const sortOrder = {
      byYear: null,
      byEpisode: null,
      byTitle: null,
      [order]: orderType,
    };
    setOrder(sortOrder);
  };

  const resetSortOrder = () => {
    setOrder({
      byYear: null,
      byEpisode: null,
      byTitle: null,
    });
  };

  const getMovies = () => {
    let ret = [...data];

    if (filter !== '') {
      ret = ret.filter((film: Film) =>
        film.title.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if (order.byTitle !== null) {
      ret.sort((a: Film, b: Film) => {
        if (order.byTitle === SortOrderType.ASC) {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      });
    }

    if (order.byEpisode !== null) {
      ret.sort((a: Film, b: Film) => {
        if (order.byEpisode === SortOrderType.ASC) {
          return a.episode_id - b.episode_id;
        } else {
          return b.episode_id - a.episode_id;
        }
      });
    }

    if (order.byYear !== null) {
      ret.sort((a: Film, b: Film) => {
        if (order.byYear === SortOrderType.ASC) {
          return +moment(a.release_date).isAfter(moment(b.release_date)) - 1;
        } else {
          return +moment(a.release_date).isBefore(moment(b.release_date)) - 1;
        }
      });
    }

    if (onlyTrueSW) {
      ret = ret.filter(
        (film: Film) =>
          film.episode_id === 4 ||
          film.episode_id === 5 ||
          film.episode_id === 6
      );
    }

    return ret;
  };

  const value = {
    getMovies,
    selectedMovie,
    getData,
    selectMovie,
    getSelectedMovie,
    setFilter,
    setSortOrder,
    resetSortOrder,
    setOnlyTrueSW,
    isLoading,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
