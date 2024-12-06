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
            },
            {
                path:"/my-visa",
                element:<PrivetRoute>
                    <MyVisa></MyVisa>
                </PrivetRoute>,
                loader: () => fetch("http://localhost:5000/my-visa"),
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