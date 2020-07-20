import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CategoryContext } from '../context/CategoryContext';

function Categories() {
  const [categories, categoriesIsLoading] = useContext(CategoryContext);

  let content = <h3>Loading categories...</h3>;

  if (!categoriesIsLoading && categories) {
    const categoryIterator = Object.entries(categories).map(
      ([key, value], index) => (
        <div key={index}>
          <div className="letter">{key}</div>
          <div key={index}>
            {value.map((element) => (
              <Link key={element} to={`/categories/${element}`}>
                <div className="pt-1 pr-3">{element}</div>
              </Link>
            ))}
          </div>
        </div>
      )
    );

    content = (
      <div className="container">
        <div className="row">{categoryIterator}</div>
      </div>
    );
  }
  return content;
}

export default Categories;
