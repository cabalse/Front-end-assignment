# Front-end-assignment

The "Star Wars Movie Application"

## Project Structure

The project is divided into a Front- and a Back-end part that is contained within this monorepo.

### Setup and Init

After cloning run the following in the root to install dependencies for both projects.

> npm run install

In order for the Back-end to be able to fecth data from OmdbApi the ApiKey need to added to the Settings file in the Back-end project. The file is located here */src/settings.js*.

To run the Front-end with the Back-end in **Development** run the following in the root

> npm run dev

And for **Production**

> npm run prod

### Modes

The project can run in either **Development** or **Production**.

#### Development

In Development mode the Front-end will mock the Back-end using Mirage (https://miragejs.com/). Mirage is applied and started automaticly when running in Dev-mode. The tests uses Mirage as well for mocking. In order to use the Back-end the project needs to be run i Production mode.
The .env-files facilitates the API url's.

#### Production

The Production mode is lously used for running the project in near Product-like environment where the Front-end do all calls to the Back-end locally. In order to build and deploy the project in a realy Production environment changes need to be done to the .env-files accordeingly.

## Techstack

### Front-end

Front-end is built as a SPA using React 18.2.0, Typescript and Tailwind as a CSS Framework. Vite is used for front-end tooling while Jest, Testing-Library and Mirage is just for testing.

### Back-end

The Back-end is built using the Express Web framework. Other dependencies are Axios, Node-cache.

## Improvements

### UI

The UI works but there are some areas for improvement:

<ul>
  <li>Responsiveness - The default Breakpoints provided by Tailwind is used with one additional Breakpoint specified. At some points this gives and akward apperance. I would like to use Fluid instead (if this is customer depand), or go the other way and lock the design onto very specific breakpoints (if time and money is an issue) since an app like this probably don't need perfect design at every screen width possible.</li>
  <li>Order panel - This panel with its not so good looking checkboxes should get a better design.</li>
  <li>Images - No concideration is taken on handling images. Since they are linked external sources they might be unavalible, break the design, or can be a security ris. It also drives trafic to another server that might be unwanted and unneccessary. It's an uncontrolled dependency. This should to be addressed.</li>
</ul>

### Tests

For the moment there are only two test implemented for testing the DataContext component and the its cabability to fetch data. This is an area that needs to be extended, a lot. More comprehensive test for Sorting and Filtering functions that the Context handles. And there should be more unit testing for key components.

### Fetching Data

The Front-end only fetch the data once from the Back-end. This design decision is based on the thought that Disney wont make so many new Star Wars movies that it warents a constant update of information. Not even the rating change that dramaticly over time. So in all intent and purposes the data for this application is rather static. If there is a need for a more "aggresive" fetching of data this approch needs to be reconsicered.

### Back-end

The Back-end is simple but still not an afterthough. It's main purpose as a **Back-end For Front-end** is to aggrigate the data from different sources and cache part or all of it to speed up the initial loading of Front-end application. For the moment there is cache for the data collected from the SwApi while data from the OmdbApi is not cached. A discussion about a good cache-strategy could be a good idea.
The Back-end is not written using Typescript so that needs to be adressed.
There is no major error-handling :/