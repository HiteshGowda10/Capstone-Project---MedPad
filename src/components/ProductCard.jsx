import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card transform transition-transform duration-300 hover:scale-105 border border-gray-200 shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl">
      <div className="relative pt-[75%]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-3">
          Category : {product.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors duration-200 truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          Description : {product.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </p>
          <button className="px-2 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;