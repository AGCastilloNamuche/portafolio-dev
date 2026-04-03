import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
// import appLayout from "./layouts/AppLayout";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import About from "./pages/public/About";
import Project from "./pages/public/Project";
import Skill from "./pages/public/Skill";
import ErrorPage from "./pages/ErrorPage";
import ProjectId from "./pages/public/ProjectId";
import Tools from "./pages/public/Tools";
import Blog from "./pages/public/Blog";
import BlogId from "./pages/public/BlogId";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "projects/:id",
        element: <ProjectId />,
      },
      {
        path: "skill",
        element: <Skill />,
      },
      {
        path: "tools",
        element: <Tools />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <BlogId />,
      },
    ],
  },
]);
