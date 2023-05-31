import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import NotFound from "../views/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);
