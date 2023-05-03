import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import ChefData from "../Pages/Home/ChefData/ChefData";
import ChefLayout from "../layouts/chefLayout";
import Chef from "../Pages/Chef/Chef";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<PrivetRoutes> <ChefData></ChefData></PrivetRoutes>,
                loader: (() => fetch('http://localhost:5000/foods'))
            },
            {
                path: '/chef/:id',
                element: <ChefData></ChefData>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'food',
        element: <ChefLayout></ChefLayout>,
        children: [
            {
                path: ':id',
                element: <Chef></Chef>,
                loader: ({params}) => (`http://localhost:5000/foods/${params.id}`)
            }
        ]
    }
])

export default router;