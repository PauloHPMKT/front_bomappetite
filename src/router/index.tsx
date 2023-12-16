import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Dashboard, Login } from "../pages";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ]
  },
]);

