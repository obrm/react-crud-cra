import { Outlet } from 'react-router-dom';

import { Header } from './../components';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;