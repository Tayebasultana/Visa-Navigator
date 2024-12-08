import { NavLink } from "react-router-dom";
import error from "../assets/2133716.jpg"

const ErrorPage = () => {
    return (
        <div className="bg-gradient-to-r from-[#031716] via-[#1a0c0b] to-[#031716]">
            <div className="text-center pt-16 text-blue-600">
                <NavLink TO="/" >GO TO HOME PAGE</NavLink>
            </div>
            <div>
                <img src={error} alt="" className="cover max-h-screen w-100% mx-auto" />
            </div>
        </div>
    );
};

export default ErrorPage;