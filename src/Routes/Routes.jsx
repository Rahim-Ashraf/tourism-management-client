import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import AddTouristsSpot from "../components/AddTouristsSpot/AddTouristsSpot";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllTouristsSpot from "../components/AllTouristsSpot/AllTouristsSpot";
import ViewDetails from "../components/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/add-tourists-spot",
                element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
            },
            {
                path: "/all-tourists-spot",
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch("http://localhost:5000/all-tourists-spot")
            },
            {
                path: "/view-details/:id",
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/tourists-spot/${params.id}`)
            }
        ]
    },
]);
export default router;