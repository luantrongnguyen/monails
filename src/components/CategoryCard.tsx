import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick?: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(category);
    }
  };

  return (
    <div className="single-products-catagory clearfix">
      <a href="/shop" onClick={handleClick}>
        <img src={category.image} alt={category.name} />
        <div className="hover-content">
          <div className="line"></div>
          <p>From ${category.priceFrom}</p>
          <h4>{category.name}</h4>
        </div>
      </a>
    </div>
  );
};

export default CategoryCard;
