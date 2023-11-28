import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loader as postLoader } from "../../App";
import ErrorPage from "./ErrorPage";
import Home from "../home/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      loader: postLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/:postId",
          element: <PostDetail />,
          loader: postLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
