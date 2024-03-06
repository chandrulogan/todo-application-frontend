import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import ViewTask from "./components/viewTask/ViewTask";
import AddTask from "./components/addTask/AddTask";
import Signin from "./pages/Signin";
import { getToken } from "./utils/Localstorage";

const token = getToken();

export const appRouters = createBrowserRouter([
    {
        path: "/",
        element: token ? <Home /> : <Signin />
    },
    {
        path: "/view-task/:id",
        element: token ? <ViewTask /> : <Signin />
    },
    {
        path: "/add-task",
        element: token ? <AddTask /> : <Signin />
    },
    {
        path: "/sign-up",
        element: <Signup />
    },
    {
        path: "*",
        element: <Signin />
    },
]);
