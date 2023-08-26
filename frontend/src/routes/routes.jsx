import { createBrowserRouter } from 'react-router-dom';
import Login from '../views/Login';

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
    path: "/service",
    element: <h1>service</h1>
  }
]);

export default router;
