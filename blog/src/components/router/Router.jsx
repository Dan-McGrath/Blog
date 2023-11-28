import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import ErrorPage from "./ErrorPage";
import Home, { loader as postLoader } from "../home/Home";
import PostDetail, { loader as postDetailLoader } from "../posts/postDetail";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: postLoader,
        },
        {
          path: "/:postId",
          element: <PostDetail />,
          loader: postDetailLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
