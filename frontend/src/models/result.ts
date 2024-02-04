import Film from './film';

type Result = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Film[];
};

export default Result;
