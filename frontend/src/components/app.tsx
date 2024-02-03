import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  // ChevronUpIcon,
  StarIcon,
} from '@heroicons/react/20/solid';
import ANewHope from '../assets/a-new-hope.jpg';

function App() {
  return (
    <>
      <header className="w-full flex flex-no-wrap flex-col xs:flex-row flex-col-reverse space-x-0 xs:space-x-4 relative bg-slate-50 shadow-md shadow-black/5 p-4">
        <button className="border border-slate-300 rounded p-2 px-4">
          Sort By...
        </button>
        <search className="flex-grow relative flex items-center mb-2 xs:mb-0 text-gray-400 focus-within:text-gray-600">
          <MagnifyingGlassIcon className="w-5 h-5 absolute ml-3 pointer-events-none" />
          <input
            type="text"
            name="search"
            placeholder="Type to Search"
            aria-label="Search Movie"
            className="w-full pr-3 pl-10 py-2 flex-grow border-none text-black placeholder-gray-300 ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 rounded p-2"
          />
        </search>
      </header>
      <main className="flex flex-row">
        <section className="basis-1/2 flex flex-col border-r h-lvh">
          <div className="flex flex-row space-x-4 border-b p-4 px-5 bg-blue-50">
            <div className="">EPISODE 4</div>
            <div className="grow font-medium">Episode IV - A New Hope</div>
            <div className="flex flex-row self-center">
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon
                className="w-4 h-4"
                style={{ fill: 'none', strokeWidth: '2', stroke: 'grey' }}
              />
              <StarIcon
                className="w-4 h-4"
                style={{ fill: 'none', strokeWidth: '2', stroke: 'grey' }}
              />
            </div>
            <div className="">1977-05-25</div>
          </div>
        </section>
        <section className="basis-1/2 flex flex-col p-4">
          <div className="font-medium text-3xl">Episode IV - A New Hope</div>
          <div className="flex flex-row pt-2">
            <div className="basis-1/4 mr-2 min-w-44">
              <img src={ANewHope} alt="A New Hope" className="" />
            </div>
            <div className="basis-3/4 ">
              It is a period of civil war. Rebel spaceships, striking from a
              hidden base, have won their first victory against the evil
              Galactic Empire. During the battle, Rebel spies managed to steal
              secret plans to the Empire&apos;s ultimate weapon, the DEATH STAR,
              an armored space station with enough power to destroy an entire
              planet. Pursued by the Empire&apos;s sinister agents, Princess
              Leia races home aboard her starship, custodian of the stolen plans
              that can save her people and restore freedom to the galaxy....
            </div>
          </div>
          <div className="pt-2">Directed by: George Lucas</div>
          <div className="pt-2 flex flex-row">
            <div>Average rating:</div>
            <div className="flex flex-row self-center ml-3">
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon
                className="w-4 h-4"
                style={{ fill: 'none', strokeWidth: '2', stroke: 'grey' }}
              />
              <StarIcon
                className="w-4 h-4"
                style={{ fill: 'none', strokeWidth: '2', stroke: 'grey' }}
              />
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-3">
            <div className="border rounded-full border-blue-400 text-blue-400 w-fit p-1 px-3">
              IMDB: 76%
            </div>
            <div className="border rounded-full border-blue-400 text-blue-400 w-fit p-1 px-3">
              Rotten Tomatoes: 76%
            </div>
            <div className="border rounded-full border-blue-400 text-blue-400 w-fit p-1 px-3">
              Metacritic: 76%
            </div>
          </div>
        </section>
      </main>
      <main className="">
        <section className="flex flex-col m-4 border border-slate-200 rounded bg-slate-50 p-2">
          <div className="flex justify-between">
            <div className="hidden">EPISODE 4</div>
            <div className="font-medium">Episode IV - A New Hope</div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row">
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon
                className="w-4 h-4"
                style={{ fill: 'none', strokeWidth: '2', stroke: 'grey' }}
              />
              <StarIcon
                className="w-4 h-4"
                style={{ fill: 'none', strokeWidth: '2', stroke: 'grey' }}
              />
            </div>
            <div>1977-05-25</div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row cursor-pointer">
              <ChevronDownIcon className="w-5 h-5 mr-2" />
              <p>Details ...</p>
            </div>
            <div className="mt-2 text-justify flex flex-col md:flex-row ">
              <div className="flex justify-center">
                <img
                  src={ANewHope}
                  alt="A New Hope"
                  className="mb-2 md:mb-0 mr-0 md:mr-2 min-w-72"
                />
              </div>
              It is a period of civil war. Rebel spaceships, striking from a
              hidden base, have won their first victory against the evil
              Galactic Empire. During the battle, Rebel spies managed to steal
              secret plans to the Empire&apos;s ultimate weapon, the DEATH STAR,
              an armored space station with enough power to destroy an entire
              planet. Pursued by the Empire&apos;s sinister agents, Princess
              Leia races home aboard her starship, custodian of the stolen plans
              that can save her people and restore freedom to the galaxy....
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
