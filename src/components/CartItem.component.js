import { Button } from 'react-bootstrap';

import { calcAndFormatPrice } from './../utils/index';

const CartItem = ({ thumbnail, name, price, qty, id, remove, toggleAmount }) => {
  const calculatedPrice = calcAndFormatPrice(price * qty);

  return (
    <article className='cart-item' dir='rtl'>
      <img src={thumbnail} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className='item-price'>{calculatedPrice} ש"ח</h4>
        {/* remove Button */}
        <Button onClick={() => remove(id)}>
          הסר
        </Button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
        <p className='amount'>{qty}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
