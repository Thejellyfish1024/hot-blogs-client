import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainRoot from "../root/MainRoot";
import Wishlist from "../pages/Wishlist/Wishlist";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: "/",
        element: <Root></Root>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path: "/addBlog",
            element: <AddBlog></AddBlog>
          },
          {
            path: "/allBlogs",
            element: <AllBlogs></AllBlogs>,
          },
          {
            path:'/wishlist',
            element:<Wishlist></Wishlist>
          }
        ]
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
]);

