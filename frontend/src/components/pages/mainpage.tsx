import Layout from '../templates/layout';
import FilmList from '../organisms/filmlist';
import MobileFilmList from '../organisms/mobilefilmlist';
import SelectedMovieDetails from '../molecules/selectedmoviedetails';
import Header from '../organisms/header';

const MainPage = () => {
  return (
    <Layout
      header={<Header />}
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
