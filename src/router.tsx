import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
// import appLayout from "./layouts/AppLayout";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import NotFound from "./pages/NotFound";
import Forbidden from "./pages/Forbidden";
import About from "./pages/public/About";
import Project from "./pages/public/Project";
import Skill from "./pages/public/skill";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "project",
                element: <Project />
            },
            {
                path: "skill",
                element: <Skill />
            },
            {
                path: "not-found",
                element: <NotFound />
            },
            {
                path: "forbidden",
                element: <Forbidden />
            }
        ]
    }
])
