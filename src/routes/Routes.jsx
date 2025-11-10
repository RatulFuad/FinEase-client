import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/*",
    element: (
      <h1 className="text-9xl font-bold text-center mt-10">Error 404</h1>
    ),
  },
]);

export default router;