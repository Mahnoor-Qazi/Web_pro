
import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Room from './pages/Room';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CartProvider from './store/CartProvider';
import AddProduct from './pages/AddProduct';
import AddCategory from './pages/AddCategory';
import Cart from './components/cart/Cart';
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:id',
        element: <Category />,
      },
      {
        path: '/room/:id',
        element: <Room />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/aboutus',
        element: <AboutUs />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/AddProduct',
        element: <AddProduct />,
      },
      {
        path: '/AddCategory',
        element: <AddCategory />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  );
}

export default App;