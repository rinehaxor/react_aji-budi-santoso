import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateProduct from './pages/createProduct';
import LandingPage from './pages/LandingPage';
import RootLayoutProduct from './layouts/rootLayoutProduct';
import RootLayoutLanding from './layouts/rootLayoutLanding';
import PostDetailPage from './components/landingPage/postDetail';

import { RouterProvider, createBrowserRouter, Navigate, redirect } from 'react-router-dom';
import ListProduct from './components/landingPage/ListProduct';
import Products from './components/product/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayoutLanding />,

    children: [
      {
        element: <LandingPage />,
        index: true,
      },
      {
        path: ':id',
        element: <PostDetailPage />,
      },
    ],
  },
  {
    path: '/product/',
    element: <RootLayoutProduct />,
    loader: () => {
      const token = localStorage.getItem('user', 'userToken');
      if (!token) {
        return redirect('/login');
      }
      return null;
    },
    children: [
      {
        element: <CreateProduct />,
        index: true,
      },
      {
        path: ':id',
        element: <PostDetailPage />,
      },
    ],
  },
  {
    path: '/list-product/',
    element: <RootLayoutProduct />,
    children: [
      {
        element: <Products />,
        index: true,
      },
      {
        path: ':id',
        element: <PostDetailPage />,
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
  <ApolloProvider client={client}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ApolloProvider>
);
