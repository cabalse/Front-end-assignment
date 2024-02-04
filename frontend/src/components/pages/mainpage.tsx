import Layout from '../templates/layout';

import Search from '../organisms/search';
import Sort from '../molecules/sort';
import StarRating from '../molecules/starrating';
import AverageRating from '../organisms/averageraiting';
import Director from '../atoms/director';
import PlotText from '../atoms/plottext';
import ReleaseDate from '../atoms/releasedate';
import Title from '../atoms/title';
import Episode from '../atoms/episode';
import Image from '../atoms/image';
import Details from '../organisms/details';
import AverageRatingParts from '../molecules/averageratingparts';

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
            <div className="flex flex-row space-x-4 border-b p-4 px-5 bg-blue-50">
              <Episode />
              <Title />
              <StarRating />
              <ReleaseDate />
            </div>
          </section>
          <section className="basis-1/2 flex flex-col p-4">
            <Title type="large" />
            <div className="flex flex-row pt-2">
              <div className="basis-1/4 mr-2 min-w-44">
                <Image type="clean" />
              </div>
              <PlotText />
            </div>
            <Director />
            <AverageRating />
            <AverageRatingParts />
          </section>
        </>
      }
      mainMobile={
        <>
          <section className="flex flex-col m-4 border border-slate-200 rounded bg-slate-50 p-2">
            <div className="flex justify-between">
              <Episode className="hidden" />
              <Title /> {/* minus grow ? */}
            </div>
            <div className="flex justify-between">
              <StarRating />
              <ReleaseDate />
            </div>
            <Details />
          </section>
        </>
      }
      breakpoint={768}
    />
  );
};

export default MainPage;
