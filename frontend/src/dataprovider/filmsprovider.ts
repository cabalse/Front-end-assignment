import Film from '../models/film';
import Result from '../models/result';
import request from './request';

const FilmsProvider = (url: string): Promise<Film[]> => {
  const films = async () => {
    const response = await request<Result>(url);
    return response.results;
  };
  return films();
};

export default FilmsProvider;
