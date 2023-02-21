import { Button } from 'react-bootstrap';

const AddToCartBtn = ({ disabled }) => {
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
