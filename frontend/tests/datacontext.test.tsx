import React, { useContext, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import { DataContext, DataContextProvider } from '../src/context/datacontext';
import createMirageServer from '../src/mirage/createmirageserver';
import '@testing-library/jest-dom';

const URL = 'api/films';

describe('DataContextProvider', () => {
  test('Should display that three movies was loaded when context was initiated and getData called', async () => {
    createMirageServer();

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
  });

  test('Should display the title of the selected movie when that specific movie is selected', async () => {
    createMirageServer();

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
  });
});
