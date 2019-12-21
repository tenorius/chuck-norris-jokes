import React from 'react';
import FactsRouter from './facts-router';
import { FavouriteJokeProvider } from './contexts/favourite-joke-context';
import { StoredCategoriesProvider } from './contexts/stored-categories-context';

const FactsModule = () => {
  return (
    <StoredCategoriesProvider>
      <FavouriteJokeProvider>
        <FactsRouter />
      </FavouriteJokeProvider>
    </StoredCategoriesProvider>
  );
};

export default FactsModule;
