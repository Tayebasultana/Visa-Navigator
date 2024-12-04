import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";


const ForgetPassword = () => {
    const navigate = useNavigate();
const emailRef = useRef();
const handleForgetPassword = () => {
    // console.log("get me email address", emailRef.current.value)
    const email = emailRef.current.value ;
    if(!email){
        // console.log('please give me your email to send you a password change mail')
    }
    else{
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('password reset email sent, please check your email')
            window.location.href = "https://mail.google.com";
            // navigate(location?.state ? location.state : "/")
        })
    }
}




    return (
        <div className=" md:my-7 lg:my-36 px-7 max-w-md space-y-4  mx-auto">
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-200 opacity-10 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-indigo-400 opacity-20 rounded-full"></div>
        
        <form action="">
        <div className="max-w-md space-y-4 mx-auto">
        <h2 className="text-center text-3xl font-bold text-blue-950 ">Forget Password ?</h2>
        <p className="text-center text-xl font-bold">don't worry!</p>

        <label className="input input-bordered flex items-center gap-2">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 16 16"
                 fill="currentColor"
                 className="h-4 w-4 opacity-70">
                 <path
                   d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                 <path
                   d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
               </svg>
               <input type="text"name="email" className="grow" placeholder="Give your email" ref={emailRef} required/>
             </label>

             <label className="input input-bordered flex items-center gap-2">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 16 16"
                 fill="currentColor"
                 className="h-4 w-4 opacity-70">
                 <path
                   fillRule="evenodd"
                   d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                   clipRule="evenodd" />
               </svg>
               <input type="password" name="password" className="grow" placeholder=" New password" required/>
             </label>
             <div className=" text-center">
             <NavLink to="/login" className="font-bold text-blue-900">Go to login page and login with new password  </NavLink>
             </div>
             <button onClick={handleForgetPassword} className="btn w-full text-white text-bold text-lg bg-blue-950 hover:text-black">Reset Password</button>

        </div>
        </form>
        </div>
    );
};

export default ForgetPassword;