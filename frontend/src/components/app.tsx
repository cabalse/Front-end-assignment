import { useContext, useEffect } from 'react';
import { DataContext } from './../context/datacontext';
import MainPage from './pages/mainpage';
import SWLoaderScreen from './molecules/swloaderscreen/swloaderscreen';

const URL = import.meta.env.VITE_MOVIE_API_URL;

function App() {
  const dataContext = useContext(DataContext);

  useEffect(() => {
    dataContext.getData(URL);
  }, [URL]);

  return (
    <>
      {dataContext.isLoading ? <SWLoaderScreen /> : null}
      <MainPage />
    </>
  );
}

export default App;
