import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../assets/images/logo.png';

const Header = ({ cart }) => {

  return (
    <header dir="rtl">
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
            <NavLink
              to='/add'
              className={({ isActive }) => (isActive && 'is-active')}
            >
              הוספת מוצר
            </NavLink>
            <NavLink
              to='/cart'
              className={({ isActive }) => (isActive && 'is-active')}
            >
                <i className='fas fa-shopping-cart'></i> עגלת קניות{' '}
              {cart.length > 0 &&
                `(${cart.reduce(
                  (acc, item) => acc + item.qty,
                    0
                )})`}
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;