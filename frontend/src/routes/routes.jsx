import { createBrowserRouter } from 'react-router-dom';

// @views
import Login from '../views/Login';
import Register from '../views/Register';
import Home from '../views/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error page!</div>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

export default router;
