import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import api from './../api/api';

import { Product, Message } from './../components';
import { Spinner } from './../components/layout';

const Home = () => {
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
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
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


  return (
    <Row>
      {loading ? (
        <Spinner />
      ) : error.isError ? (
        <Message variant='danger' dismissible={false}>
            {error.message}
        </Message>
      ) : (
            products
          .map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
      )}
    </Row>
  );
};

export default Home;