import React, { createContext, useContext, useReducer, useState } from 'react';

export const StoredCategoriesContext = createContext(null);

const StoredCategoriesProvider = ({ history, children }) => {
  const [categories, setCategories] = useState([]);

  return (
    <StoredCategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </StoredCategoriesContext.Provider>
  );
};

const useStoredCategories = () => {
  const context = useContext(StoredCategoriesContext);
  if (context === undefined) {
    throw new Error(
      `useStoredCategories must be used within a StoredCategoriesProvider`
    );
  }
  return context;
};

export { StoredCategoriesProvider, useStoredCategories };
