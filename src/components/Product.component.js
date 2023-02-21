import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating.component';
import AddToCartBtn from './AddToCartBtn.component'

const Product = ({ product }) => {
  const price = (product.price * 3.5).toLocaleString('he-IL');

  return (
    <Card className='my-3 p-3 rounded card-main card-main-sm card-main-md'>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.thumbnail} vatiant='top' alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as='div' className='mt-1-sm'>
            <strong>
              {product.title}
            </strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
          />
        </Card.Text>
        <Card.Text as='h5' className='mb-3'>
          {price} ש"ח{' '}
          <small>{product.stock === 0 && ` (חסר במלאי)`}</small>
        </Card.Text>

        <AddToCartBtn disabled={product.stock === 0} id={product._id} />
      </Card.Body>
    </Card>
  );
};

export default Product;
