import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTransaction from "../pages/AddTransaction";
import MyTransaction from "../pages/MyTransaction";
import Reports from "../pages/Reports";

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
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addTransaction",
        element: <AddTransaction></AddTransaction>
      },
      {
        path: "/myTransaction",
        element: <MyTransaction></MyTransaction>
      },
      {
        path: "/reports",
        element: <Reports></Reports>
      }
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