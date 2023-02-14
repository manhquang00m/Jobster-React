import Dashbroad from "../pages/dashbroad/Dashbroad";
import Error from "../pages/Error";
import Landing from "../pages/Landing";
import Register from "../pages/Register";
import {
    createBrowserRouter,
} from "react-router-dom";
import Stats from "../pages/dashbroad/Stats";
import Alljobs from "../pages/dashbroad/Alljobs";
import Addjob from "../pages/dashbroad/Addjob";
import Profile from "../pages/dashbroad/Profile";
import ProtectedRoute from "../pages/ProtectedRoute";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute>
            <Dashbroad></Dashbroad>
        </ProtectedRoute>,
        children: [
            {
                path: '/',
                element: <Stats></Stats>
            },
            {
                path: 'all-jobs',
                element: <Alljobs></Alljobs>
            },
            {
                path: 'add-job',
                element: <Addjob></Addjob>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: "landing",
        element: <Landing></Landing>,
    },
    {
        path: "register",
        element: <Register></Register>,
    },
    {
        path: "*",
        element: <Error></Error>,
    },
]);