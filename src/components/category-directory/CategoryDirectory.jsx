import React from 'react';
import CategoryItems from '../category-items/CategoryItems';
import './CategoryDirectory.scss';

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
