import { CartItem } from '../components';

const Cart = ({ cart, setCart }) => {

  const handleClearCart = () => { };

  const total = 0;

  const getCartItems = () => {
    const cartItems = cart.map((product) => product.id);
  }

  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>עגלת קניות</h2>
          <h4 className='empty-cart'>אין מוצרים</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2>עגלת הקניות שלך</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            סך הכל <span>{total} ש"ח</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={handleClearCart}>
          הסרת כל המוצרים
        </button>
      </footer>
    </section>
  );
};

export default Cart;
