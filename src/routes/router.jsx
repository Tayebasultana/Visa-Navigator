import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddVisa from "../pages/AddVisa";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllVisa from "../pages/AllVisa";
import MyVisa from "../pages/MyVisa";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
               path:"/",
               element:<Home></Home>
            },
            {
                path:"/all-visa",
                element:<AllVisa></AllVisa>,
                loader: () => fetch('http://localhost:5000/visa')
            },
            {
                path:"/add-visa",
                element:<AddVisa></AddVisa>
            },
            {
                path:"/my-visa",
                element:<MyVisa></MyVisa>
            }
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/forgetPassword",
        element:<ForgetPassword></ForgetPassword>
    },
    {
        path:"/register",
        element:<Register></Register>
    }
])

export default router;