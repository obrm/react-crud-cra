import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Form, Button } from 'react-bootstrap';

import { Spinner } from '../components/layout';
import { Rating, AddToCartBtn, Message } from '../components';

const Product = ({ product, match }) => {
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate('back')} className='mb-3'>
        חזרה
      </Button>

      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant='danger' dismissible={false}>
          {error}
        </Message>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={` מ-${product.numReviews} ביקורות`}
                    isSmall={false}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>
                    {product.price}{' '}ש"ח
                  </strong>
                </ListGroup.Item>
                <ListGroup.Item>{product.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>מחיר:</Col>
                      <Col>
                        <strong
                          style={{ fontSize: product.price > 999 && '0.85rem' }}
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
                        {product.countInStock > 0 ? `קיים במלאי` : `חסר במלאי`}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>כמות: </Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <AddToCartBtn
                      disabled={product.countInStock === 0}
                      id={product._id}
                      qty={qty}
                    />
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
