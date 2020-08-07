import React, { createContext, useState } from 'react';
import axios from 'axios';

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  let categories = [];
  let categoriesIsLoading = false;

  const fillCategoriesWithData = () => {
    const urlAllCategories = 'http://localhost:8080/categories';
    categoriesIsLoading = true;
    axios
      .get(urlAllCategories, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response);
        categories = response.data;
        categoriesIsLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <CategoryContext.Provider
      value={[categories, categoriesIsLoading, fillCategoriesWithData]}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
