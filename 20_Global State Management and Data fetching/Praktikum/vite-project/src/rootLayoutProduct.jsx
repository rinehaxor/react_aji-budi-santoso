import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './components/Header';

const RootLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default RootLayout;
