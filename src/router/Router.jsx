import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Service from '../pages/Service';
import About from '../pages/About';
import Contact from '../pages/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        Component: Home,
      },
      {
        path:"/service",
        Component: Service,
      },
      {
        path:"/about",
        Component: About,
      },
      {
        path:"/contact",
        Component: Contact,
      },
    ]
  },
]);

export default router;
