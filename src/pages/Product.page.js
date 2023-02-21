import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Form, Button } from 'react-bootstrap';

import api from './../api/api';

import { Spinner } from '../components/layout';
import { AddToCartBtn, Message } from '../components';

const Product = ({ setCart, cart }) => {
  const [product, setProduct] = useState(null)
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    message: ''
  });

  const { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await api.get(`/products/${productId}`);
        setProduct(response.data);
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

    getProduct();
  }, [productId]);


  const price = product && (product.price * 3.5).toLocaleString('he-IL');

  return (
    <>
      <Button onClick={() => navigate('/')} className='mb-3'>
        חזרה
      </Button>

      {loading ? (
        <Spinner />
      ) : error.isError ? (
        <Message variant='danger' dismissible={false}>
            {error.message}
        </Message>
      ) : (
        <>
          <Row>
                <Col md={12}>
                  <Image src={product.thumbnail} alt={product.name} fluid />
                </Col>            
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>מחיר:</Col>
                      <Col>
                        <strong
                              style={{ fontSize: price > 999 && '0.85rem' }}
                        >
                          {product.price}{' '}ש"ח
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>סטטוס:</Col>
                      <Col>
                            {product.stock > 0 ? `קיים במלאי` : `חסר במלאי`}
                      </Col>
                    </Row>
                      </ListGroup.Item>
                  <ListGroup.Item>
                        <AddToCartBtn
                          disabled={product.stock === 0}
                          cart={cart} setCart={setCart} id={product.id} />
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Product;
