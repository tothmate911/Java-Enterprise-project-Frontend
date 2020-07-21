import React, { createContext } from 'react';
import useApiCall from '../hooks/ApiCall';

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const urlAllCategories = 'http://localhost:8080/books/categories';
  const [categories, categoriesIsLoading] = useApiCall(urlAllCategories);

  return (
    <CategoryContext.Provider value={[categories, categoriesIsLoading]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
