import React from 'react';
import DirectoryItems from '../directory-items/DirectoryItems';
import './CategoryDirectory.scss';

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
