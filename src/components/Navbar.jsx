import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "./AuthProvider/AuthProvider";


const Navbar = () => {
    const {user, handleLogout} = useContext(authContext)

    return (
        <div className="navbar bg-blue-950 text-white px-2 md:px-7 lg:px-24 mx-auto">
  <div className="navbar-start">

  <div className="navbar-center md:navbar-center lg:navbar-start">
    <h2 className="font-bold text-2xl ">VISA NAVIGATOR</h2>
  </div>


    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-500">
        <NavLink to="/" className={({ isActive }) => isActive? "text-blue-500" : ""}>Home</NavLink>
        <NavLink to="/all-visa" className={({ isActive }) => isActive? "text-blue-500" : ""}>All-visas</NavLink>
        <NavLink to ="/add-visa" className={({ isActive }) => isActive? "text-blue-500" : ""}>Add-visa</NavLink>
        <NavLink to="/my-visa" className={({ isActive }) => isActive? "text-blue-500" : ""}>My-visa</NavLink>
      </ul>
    </div>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-7">
    <NavLink to="/" className={({ isActive }) => isActive? "text-blue-500" : ""}>Home</NavLink>
    <NavLink to="/all-visa" className={({ isActive }) => isActive? "text-blue-500" : ""}>All-visas</NavLink>
    <NavLink to ="/add-visa" className={({ isActive }) => isActive? "text-blue-500" : ""}>Add-visa</NavLink>
    <NavLink to="/my-visa" className={({ isActive }) => isActive? "text-blue-500" : ""}>My-visa</NavLink>
    </ul>
  </div>


  <div className="navbar-end">
  {
    user?.email ? 
    (<div className="flex gap-2 items-center">
      {/* https://unsplash.com/photos/white-rose-enclosed-photograph-pDGNBK9A0sk */}
      <img src={user.photoURL} alt="" className="rounded-full w-10 h-10"/>
      <button onClick={handleLogout} className="btn px-7 font-bold text-blue-950">log out</button>
    </div>) : 
    (<div>
      <NavLink to="/login"
       className="btn px-7 font-bold text-blue-950">log-in
      </NavLink>
    </div>)
  }
  </div>
        </div>
    );
};

export default Navbar;