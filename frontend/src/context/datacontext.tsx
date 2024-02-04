import { useState, createContext, ReactNode } from 'react';
import Film from '../models/film';
import FilmsProvider from '../dataprovider/filmsprovider';

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
};

const defaultContext: DataContextType = {
  getMovies: () => [],
  selectedMovie: null,
  getData: (url: string) => null,
  selectMovie: (id: number | null) => null,
  getSelectedMovie: () => undefined,
  setFilter: (filter: string) => null,
};

const DataContext = createContext<DataContextType>(defaultContext);

const DataContextProvider = ({ children }: Props) => {
  const [filter, setFilter] = useState<string>('');
  const [data, setData] = useState<Film[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

  const getData = (url: string) => {
    FilmsProvider(url).then((data: Film[]) => {
      setData(data);
    });
  };

  const selectMovie = (id: number | null) => {
    setSelectedMovie(id);
  };

  const getSelectedMovie = () => {
    return data.find((film: Film) => film.episode_id === selectedMovie);
  };

  const getMovies = () => {
    if (filter === '') return data;
    return data.filter((film: Film) =>
      film.title.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const value = {
    getMovies,
    selectedMovie,
    getData,
    selectMovie,
    getSelectedMovie,
    setFilter,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
