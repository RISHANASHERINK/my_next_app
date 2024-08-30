// pages/index.js
import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';  // Correct path to your CSS file

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async (query) => {
    try {
      const response = await fetch(`/api/products?search=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setProducts([]);
    }
  };

  return (
    <main className={styles.main}>
      <h1>Product Search</h1>
      <SearchForm onSearch={fetchProducts} />
      {error && <p className={styles.error}>Error: {error}</p>}
      <ProductList products={products} />
    </main>
  );
};

export default Home;
