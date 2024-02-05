import { useContext, useEffect } from 'react';
import { DataContext } from './../context/datacontext';
import MainPage from './pages/mainpage';

const URL = 'api/getMovies';

function App() {
  const dataContext = useContext(DataContext);

  useEffect(() => {
    dataContext.getData(URL);
  }, [dataContext]);

  return <MainPage />;
}

export default App;
