# Front-end-assignment

The "Star Wars Movie Application"

## Project Structure

The application consists of a Front- and a Back-end found in respective folders in the repo.

### Setup and Init

For the Back-end to fetch data from OmdbApi, the ApiKey needs to be added to the Settings file in the Back-end project. The file is located here: _backend/src/settings.js_.

To run the Front-end with the Back-end in **Development**, run the following in the root

> npm run dev

And for **Production**

> npm run prod

### Modes

The project can run in either **Development** or **Production** mode.

#### Development

In Development mode, the Front-end will mock the Back-end using Mirage (https://miragejs.com/). Mirage is applied and started automatically when running in Development. Tests use Mirage for mocking. For the application to use the Back-end the project needs to be run in Production mode.
The .env-files facilitate the different API urls.

#### Production

"Production mode" is loosely used for running the project in a near product-like environment where the Front-end use the Back-end. To build and deploy the project in a real Production environment, changes need to be made to the .env-files accordingly.

## Techstack

### Front-end

Front-end is built as a SPA using React 18.2.0, Typescript, and Tailwind as a CSS Framework. Vite is used for front-end tooling while Jest, Testing-Library and Mirage are just for testing.

### Back-end

The Back-end is built using the Express Web framework. Other dependencies are Axios, Node-cache.

## Improvements

### UI

The UI works, but there are some areas for improvement:

<ul>
  <li>Responsiveness - The default Breakpoints provided by Tailwind are used with one additional Breakpoint specified. At some points, this gives an awkward appearance. I want to use Fluid instead (if this lines up with a potential customer's demands) or go the other way and lock the design onto precise breakpoints (if time and money are an issue) since an application like this probably doesn't need perfect design at every screen width possible.</li>
  <li>Order panel - This panel, with its not-so-good-looking checkboxes, should get a better design.</li>
  <li>Images - No consideration is taken on handling images. Since they are linked as external sources, they might be unavailable, break the design, or be a security risk. It also drives traffic to another server that might be unwanted and unnecessary. It's an uncontrolled dependency. This should be addressed.</li>
</ul>

### Tests

Currently, only a couple of tests are implemented for testing the DataContext component and its capability to fetch and sort/filter data. This area needs to be extended a lot. More comprehensive tests for Sorting and Filtering functions that the Context handles should be implemented. There should also be more unit testing for key components.

### Fetching Data

The Front-end only fetch the data once from the Back-end. This design decision is based on the thought that Disney will (luckily) not make that many new Star Wars movies in a hurry. So, this doesn't warrant constant information updates. Not even the ratings change that dramatically over time. So, for all intents and purposes, the data for this application is relatively static. If there is a need for a more "aggressive" fetching of data, this approach needs to be reconsidered.

#### Service Worker
Depending on the "customer" demands, I would consider using a Service Worker. This would allow us to fetch and cache the data to give the application an offline capability. 

### Back-end

The Back-end is simple but still not an afterthought. Its main purpose as a **Back-end For Front-end** is to aggregate the data from different sources and cache part or all of it to speed up the initial loading of the Front-end application. There is a cache for the data collected from the SwApi while data from the OmdbApi is not cached. A discussion about a good cache strategy could be a good idea.
The back end is not written using Typescript, so that must also be addressed.
There is no major error handling.
