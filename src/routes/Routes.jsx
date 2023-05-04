import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Blog from "../components/Blog";
import ViewDetails from "../components/ViewDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'/details/:id',
                element:<ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/data/${params.id}`)
            }
        ]
    }
])

export default router;