import React, { useState } from 'react';
import { client } from '../lib/client';
import { Product, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  const uniqueCategories = [...new Set(products.map((p) => p.category).filter(Boolean))];
  const categories = ['Toate', ...uniqueCategories];

  const [selectedCategory, setSelectedCategory] = useState('Toate');

  const filteredProducts = selectedCategory === 'Toate'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <HeroBanner heroBanner={bannerData?.[0]} />
      
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="products-container">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <div>Nu s-au găsit produse.</div>
        )}
      </div>


      <style jsx>{`
        .category-buttons {
          margin: 20px 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .category-button {
          padding: 10px 20px;
          background-color: #f5f5f5;
          color: #333;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s, box-shadow 0.3s, transform 0.2s;
        }
        .category-button:hover {
          background-color: #e0e0e0;
          transform: translateY(-2px);
        }
        .category-button.active {
          background-color: #333;
          color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async () => {
  // Fetch products from Sanity
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // Fetch banner data
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
