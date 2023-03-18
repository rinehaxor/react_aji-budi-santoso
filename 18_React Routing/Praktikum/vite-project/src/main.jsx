import React from 'react';
import ReactDOM from 'react-dom/client';

import CreateProduct from './pages/createProduct';
import LandingPage from './pages/LandingPage';
import RootLayoutProduct from './rootLayoutProduct';
import RootLayoutLanding from './rootLayoutLanding';
import PostDetailPage from './components/landingPage/postDetail';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';

const isLoggedIn = false;
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
