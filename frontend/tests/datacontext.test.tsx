import React, { useContext, useEffect } from 'react';
import { render, screen, within } from '@testing-library/react';
import { DataContext, DataContextProvider } from '../src/context/datacontext';
import createMirageServer from '../src/mirage/createmirageserver';
import '@testing-library/jest-dom';
import SortOrderType from '../src/consts/sortordertypes';

const URL = 'api/getMovies';

describe('DataContextProvider', () => {
  test('Should display that three movies was loaded when context was initiated and getData called', async () => {
    const server = createMirageServer({ environment: 'test' });

    const TestingComponent = () => {
      const dataContext = useContext(DataContext);

      useEffect(() => {
        dataContext.getData(URL);
      }, [dataContext]);

      if (dataContext.getMovies().length === 0) {
        return null;
      } else {
        return <p>Number of Movies: {dataContext.getMovies().length}</p>;
      }
    };

    render(
      <DataContextProvider>
        <TestingComponent />
      </DataContextProvider>
    );

    expect(await screen.findByText('Number of Movies: 3')).toBeVisible();

    server.shutdown();
  });

  test('Should display the title of the selected movie when that specific movie is selected', async () => {
    const server = createMirageServer({ environment: 'test' });

    const TestingComponent = () => {
      const dataContext = useContext(DataContext);

      useEffect(() => {
        dataContext.getData(URL);
        dataContext.selectMovie(4);
      }, [dataContext]);

      if (dataContext.getMovies().length === 0) {
        return null;
      } else {
        return (
          <p>Selected movies title: {dataContext.getSelectedMovie()?.title}</p>
        );
      }
    };

    render(
      <DataContextProvider>
        <TestingComponent />
      </DataContextProvider>
    );

    expect(
      await screen.findByText('Selected movies title: A New Hope')
    ).toBeVisible();

    server.shutdown();
  });

  test('Should display the movies in order from A-Z when sort by Title with type ASC is set', async () => {
    const server = createMirageServer({ environment: 'test' });

    const TestingComponent = () => {
      const dataContext = useContext(DataContext);

      useEffect(() => {
        dataContext.getData(URL);
        dataContext.setSortOrder('byTitle', SortOrderType.ASC);
      }, []);

      if (dataContext.getMovies().length === 0) {
        return null;
      } else {
        return (
          <>
            {dataContext.getMovies().map((movie) => (
              <p key={movie.episode_id} role="row">
                {movie.title}
              </p>
            ))}
          </>
        );
      }
    };

    render(
      <DataContextProvider>
        <TestingComponent />
      </DataContextProvider>
    );

    const rows = await screen.findAllByRole('row');
    expect(within(rows[0]).getByText('A New Hope')).toBeVisible();
    expect(within(rows[1]).getByText('Return of the Jedi')).toBeVisible();
    expect(within(rows[2]).getByText('The Empire Strikes Back')).toBeVisible();

    server.shutdown();
  });

  test('Should display one movie that fullfills the set filter string', async () => {
    const server = createMirageServer({ environment: 'test' });

    const TestingComponent = () => {
      const dataContext = useContext(DataContext);

      useEffect(() => {
        dataContext.getData(URL);
        dataContext.setFilter('Hope');
      }, []);

      if (dataContext.getMovies().length === 0) {
        return null;
      } else {
        return (
          <>
            {dataContext.getMovies().map((movie) => (
              <p key={movie.episode_id} role="row">
                {movie.title}
              </p>
            ))}
          </>
        );
      }
    };

    render(
      <DataContextProvider>
        <TestingComponent />
      </DataContextProvider>
    );

    const rows = await screen.findAllByRole('row');
    expect(rows.length).toBe(1);
    expect(within(rows[0]).getByText('A New Hope')).toBeVisible();

    server.shutdown();
  });
});
