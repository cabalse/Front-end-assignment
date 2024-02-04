import { useState, createContext, ReactNode } from 'react';
import Film from '../models/film';
import FilmsProvider from '../dataprovider/filmsprovider';

type Props = {
  children?: ReactNode;
};

type DataContextType = {
  data: Film[];
  selectedMovie: number | null;
  getData: (url: string) => void;
  selectMovie: (id: number | null) => void;
  getSelectedMovie: () => Film | undefined;
};

const defaultContext: DataContextType = {
  data: [],
  selectedMovie: null,
  getData: (url: string) => null,
  selectMovie: (id: number | null) => null,
  getSelectedMovie: () => undefined,
};

const DataContext = createContext<DataContextType>(defaultContext);

const DataContextProvider = ({ children }: Props) => {
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

  const value = { data, selectedMovie, getData, selectMovie, getSelectedMovie };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
