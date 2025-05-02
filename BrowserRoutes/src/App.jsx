import Home from './components/home.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import { createBrowserRouter, RouterProvider } from "react-router";
import './App.css';
import { useRef, useState } from 'react';
import ProtectedRoute from './components/protectedRoute.jsx';
import Dashboard from './components/dashboard.jsx';
import Login from './components/login.jsx';
import Profile from './components/profile.jsx';

const App = () => {
  const [ischange, SetIsChange] = useState(false);       // you can use this if needed
  const isAuthenticated = useRef(false);                 // holds login state across rerenders

  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login check={isAuthenticated} setchange={SetIsChange} />
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute isAuth={isAuthenticated.current}>
          <Dashboard />
        </ProtectedRoute>
      )
    },
    {
      path: '*',
      element: <p>Page not found</p>,
    },
    {
      path: 'profile/:id',
      element: <Profile />
    }
  ]);

  return <RouterProvider router={routing} />;
};

export default App;
