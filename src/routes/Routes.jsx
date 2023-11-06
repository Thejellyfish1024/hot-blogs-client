import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/addBlog",
            element:<AddBlog></AddBlog>
        },
        {
            path:"/allBlogs",
            element:<AllBlogs></AllBlogs>,
        },
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]);

