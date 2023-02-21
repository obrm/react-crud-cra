import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import api from './api/api';
import { getItem, setItem } from './services/localStorageService';

import { SharedLayout, Home, Product, EditProduct, Cart, NotFound, SharedProductLayout } from './pages';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: ''
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);

        const response = await api.get(
          "/products",
          {
            transformResponse: [
              (data) => {
                const parsedData = JSON.parse(data);
                return parsedData.products.slice(0, 8);
              }
            ]
          }
        );

        setProducts(response.data);
        setItem('products', response.data);
      } catch (error) {
        console.error(error);
        setError({
          isError: true,
          message: error.message
        });
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const cartItems = getItem('cart');
    if (cartItems) {
      setCart(cartItems);
    }
  }, []);

  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<SharedLayout cart={cart} />}>
            <Route
              index
              element={<Home
                products={products}
                cart={cart}
                setCart={setCart}
                loading={loading}
                error={error} />} />
            <Route path='cart' element={<Cart cart={cart} setCart={setCart} products={products} />} />

            <Route path='products' element={<SharedProductLayout />}>
              <Route path=':productId' element={<Product cart={cart} setCart={setCart} />} />
              <Route path=':productId/edit' element={<EditProduct />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
