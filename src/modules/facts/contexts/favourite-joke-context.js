import React, { createContext, useContext, useReducer } from 'react';

export const FavouriteJokeDispatchContext = createContext(null);
export const FavouriteJokeContext = createContext(null);

const actionTypes = {
  SET_FAVORITE_JOKE: 'SET_FAVORITE_JOKE',
  CLEAR_FAVORITE_JOKE: 'CLEAR_FAVORITE_JOKE'
};

const favoriteJokeReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_FAVORITE_JOKE:
      return {
        ...action.joke
      };
    case actionTypes.CLEAR_FAVORITE_JOKE:
      return null;
    default:
      return state;
  }
};

const FavouriteJokeProvider = ({ history, children }) => {
  const [state, dispatch] = useReducer(favoriteJokeReducer, null);

  return (
    <FavouriteJokeDispatchContext.Provider value={dispatch}>
      <FavouriteJokeContext.Provider value={state}>
        {children}
      </FavouriteJokeContext.Provider>
    </FavouriteJokeDispatchContext.Provider>
  );
};

const useFavouriteJoke = () => {
  const context = useContext(FavouriteJokeContext);
  if (context === undefined) {
    throw new Error(
      `useFavouriteJoke must be used within a FavouriteJokeProvider`
    );
  }
  return context;
};

const useFavouriteJokeDispatch = () => {
  const context = useContext(FavouriteJokeDispatchContext);
  if (context === undefined) {
    throw new Error(
      `useFavouriteJokeDispatch must be used within a FavouriteJokeDispatchProvider`
    );
  }
  return context;
};

const favoriteJokeActions = {
  setFavoriteJoke: ({ dispatch, joke }) =>
    dispatch({ type: actionTypes.SET_FAVORITE_JOKE, joke }),
  clearFavoriteJoke: ({ dispatch }) =>
    dispatch({ type: actionTypes.CLEAR_FAVORITE_JOKE })
};

export {
  FavouriteJokeProvider,
  useFavouriteJoke,
  useFavouriteJokeDispatch,
  favoriteJokeActions
};
