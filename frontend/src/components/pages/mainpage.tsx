import Layout from '../templates/layout';
import Search from '../organisms/search';
import Sort from '../molecules/sort';
import FilmList from '../organisms/filmlist';
import MobileFilmList from '../organisms/mobilefilmlist';
import SelectedMovieDetails from '../molecules/selectedmoviedetails';

const MainPage = () => {
  return (
    <Layout
      header={
        <>
          <Sort />
          <Search />
        </>
      }
      mainDesktop={
        <>
          <section className="basis-1/2 flex flex-col border-r h-lvh">
            <FilmList />
          </section>
          <SelectedMovieDetails />
        </>
      }
      mainMobile={<MobileFilmList />}
    />
  );
};

export default MainPage;
