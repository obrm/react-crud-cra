import { useState, useEffect } from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';

import api from './../api/api';

import { Product, Message } from './../components';
import { Spinner } from './../components/layout';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
                return parsedData.products.slice(0, 5);
              }
            ]
          }
        );
        console.log(response);
        // setProducts(response.data);
      } catch (error) {
        setError(true);
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
      ) : error ? (
        <Message variant='danger' dismissible={false}>
          {error}
        </Message>
      ) : (
        products
          .filter((product) => product.published)
          .map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
      )}
    </Row>
  );
};

export default Home;