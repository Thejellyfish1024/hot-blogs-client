import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainRoot from "../root/MainRoot";
import Wishlist from "../pages/Wishlist/Wishlist";
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import UpdateDetails from "../pages/UpdateDetails/UpdateDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot></MainRoot>,
    errorElement:<ErrorPage></ErrorPage>,
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
            element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>
          },
          {
            path:'/blogs/:id',
            element:<BlogDetails></BlogDetails>
          },
          {
            path:'/featuredBlogs',
            element:<FeaturedBlogs></FeaturedBlogs>
          },
          {
            path:'/updateDetails/:id',
            element:<PrivateRoute><UpdateDetails></UpdateDetails></PrivateRoute>
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

