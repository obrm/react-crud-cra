import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../assets/images/logo.png';

const Header = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <header>
      <Navbar bg='primary' className='navbar-dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand className='mr-n4'>
              <Navbar.Brand>
                <img src={logo} alt='logo' className='logo-img' />
              </Navbar.Brand>
            </Navbar.Brand>
          </Link>
          <Nav className='mr-auto'>
            <Link to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i> עגלת קניות{' '}
                {cartItems.length > 0 &&
                  `(${cartItems.reduce(
                    (acc, item) => acc + Number(item.qty),
                    0
                  )})`}
              </Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;