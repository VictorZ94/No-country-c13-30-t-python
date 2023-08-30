import { createBrowserRouter } from 'react-router-dom';

// @views
import Login from '../views/Login';
import Register from '../views/Register';
import Home from '../views/Home';
import Reports from '../views/Reports';

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
  },
  {
    path: "/reports",
    element: <Reports />
  }
]);

export default router;
