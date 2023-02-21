import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { SharedLayout, Home, Product, Cart, NotFound, SharedProductLayout } from './pages';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='cart' element={<Cart />} />

            <Route path='product' element={<SharedProductLayout />}>
              <Route path=':productId' element={<Product />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
