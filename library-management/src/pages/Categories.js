import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { CategoryContext } from '../context/CategoryContext';

function Categories() {
  // const [categories, categoriesIsLoading] = useContext(CategoryContext);

  const [categories, setCaetgories] = useState([]);
  const [categoriesIsLoading, setCategoriesIsLoading] = useState(false);

  useEffect(() => {
    const urlAllCategories = 'http://localhost:8080/categories/';
    console.log('Categories: sending request to: ' + urlAllCategories);
    setCategoriesIsLoading(true);
    axios
      .get(urlAllCategories, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response);
        setCaetgories(response.data);
        setCategoriesIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let content = <h3>Loading categories...</h3>;

  if (!categoriesIsLoading && categories) {
    const categoryIterator = Object.entries(categories).map(
      ([key, value], index) => (
        <div key={index}>
          <div className="letter">{key}</div>
          <div key={index}>
            {value.map((element) => (
              <Link key={element} to={`/home/categories/${element}`}>
                <div className="pt-1 pr-3">{element}</div>
              </Link>
            ))}
          </div>
        </div>
      )
    );

    content = (
      <div className="page container">
        <div className="row">{categoryIterator}</div>
      </div>
    );
  }
  return content;
}

export default Categories;
