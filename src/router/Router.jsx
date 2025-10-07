import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Service from "../pages/Service";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/service",
        Component: Service,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
    ],
  },
]);

export default router;
