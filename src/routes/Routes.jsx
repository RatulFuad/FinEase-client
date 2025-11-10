import { createBrowserRouter } from "react-router";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

export default router;