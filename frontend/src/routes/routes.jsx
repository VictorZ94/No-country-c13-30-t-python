import { createBrowserRouter } from 'react-router-dom';

// @views
import Login from '../views/Login';
import Register from '../views/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
