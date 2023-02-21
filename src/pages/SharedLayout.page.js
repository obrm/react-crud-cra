import { Outlet } from 'react-router-dom';

import { Header } from './../components';

const SharedLayout = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <Outlet />
    </>
  );
};

export default SharedLayout;