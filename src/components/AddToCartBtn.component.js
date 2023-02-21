import { Button } from 'react-bootstrap';

const AddToCartBtn = ({ disabled, id, qty }) => {
  return (
    <Button
      className='btn-block btn-brand'
      type='button'
      disabled={disabled}
    >
      להוסיף לעגלה
    </Button>
  );
};

export default AddToCartBtn;
