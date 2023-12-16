import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, Login } from "../pages";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ]
  },
]);

