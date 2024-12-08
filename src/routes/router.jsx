import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddVisa from "../pages/AddVisa";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllVisa from "../pages/AllVisa";
import MyVisa from "../pages/MyVisa";
import VisaDetails from "../components/VisaDetails";
import MyAddedVisas from "../pages/MyAddedVisas";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import ErrorPage from "../components/ErrorPage";
import Update from "../components/Update";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
               path:"/",
               element:<Home></Home>,
               loader: () => fetch('http://localhost:5000/visa'),
            },
            {
                path:"/all-visa",
                element:<AllVisa></AllVisa>,
                loader: () => fetch('http://localhost:5000/visa'),
            },
            {
                path:"/add-visa",
                element:<PrivetRoute>
                    <AddVisa></AddVisa>
                </PrivetRoute>,
            },
            {
               path:"/my-added-visas",
               element:<PrivetRoute>
                <MyAddedVisas></MyAddedVisas>
               </PrivetRoute>,
            //    loader:({params}) => fetch(`http://localhost:5000/my-added-visa?email=${user.email}`)
            },
            {
                path:"/my-visa/:email",
                element:<PrivetRoute>
                    <MyVisa></MyVisa>
                </PrivetRoute>,
                // loader: () => fetch("http://localhost:5000/my-visa"),
            },
            {
                path:"/update/:id",
                element:<Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/visa/${params.id}`)
            },
            {
                path:"/visa/:id",
                element:<PrivetRoute>
                    <VisaDetails></VisaDetails>
                </PrivetRoute>,
                loader:({params}) => fetch(`http://localhost:5000/visa/${params.id}`)
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