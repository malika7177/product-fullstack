import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log('products', products);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 16px' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', background: 'linear-gradient(to right, cyan, blue)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
        Current Products 🚀
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', width: '100%' }}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p style={{ fontSize: '20px', textAlign: 'center', fontWeight: 'bold', color: 'gray' }}>
          No products found 😢{' '}
          <Link to="/create" style={{ color: 'blue', textDecoration: 'underline' }}>
            Create a product
          </Link>
        </p>
      )}
    </div>
  );
};

export default HomePage;
