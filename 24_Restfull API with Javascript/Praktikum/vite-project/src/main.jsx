import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';

import Coba from './Coba';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateProduct from './pages/createProduct';
import LandingPage from './pages/LandingPage';
import RootLayoutProduct from './layouts/rootLayoutProduct';
import RootLayoutLanding from './layouts/rootLayoutLanding';
import PostDetailPage from './components/landingPage/postDetail';
import { RouterProvider, createBrowserRouter, Navigate, BrowserRouter } from 'react-router-dom';

const isLoggedIn = true;
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayoutLanding />,
    children: [
      {
        element: <LandingPage />,
        index: true,
        //loader: HomePageLoader
      },
      {
        path: ':id',
        element: <PostDetailPage />,
        // loader: PostDetailPageLoader,
      },
    ],
  },
  {
    path: '/product',
    element: <RootLayoutProduct />,
    children: [
      {
        element: isLoggedIn ? <CreateProduct /> : <Navigate to="/" replace={true} />,
        index: true,
        //loader: HomePageLoader
      },
      {
        path: ':id',
        element: <PostDetailPage />,
        // loader: PostDetailPageLoader,
      },
    ],
  },
  {
    path: '/login',
    element: <RootLayoutLanding />,
    children: [
      {
        element: <LoginPage />,
        index: true,
      },
    ],
  },
  {
    path: '/register',
    element: <RootLayoutLanding />,
    children: [
      {
        element: <RegisterPage />,
        index: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
