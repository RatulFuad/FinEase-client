import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
        {
            index: true,
            element: <HomePage></HomePage>
        }
    ]
  },
]);

export default router;