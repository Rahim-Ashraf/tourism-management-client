import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";


const Navbar = () => {
    const [hoverEffect, setHoverEffect] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }

    const handleMouseOver = () => {
        setHoverEffect(true)
    }
    const handleMouseOut = () => {
        setHoverEffect(false)
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink>Home</NavLink>
                        <NavLink>All Tourists Spot</NavLink>
                        <NavLink>Add Tourists Spot</NavLink>
                        <NavLink>My List</NavLink>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">Dream Tour</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink>Home</NavLink>
                    <NavLink>All Tourists Spot</NavLink>
                    <NavLink>Add Tourists Spot</NavLink>
                    <NavLink>My List</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="relative mr-16">
                    <div className="avatar cursor-pointer">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <div className={hoverEffect?"block absolute w-28":"hidden absolute w-28"}>
                        <p className="bg-gray-700 rounded p-1">{user?.displayName}</p>
                        <button onClick={handleLogOut} className="btn mt-2">Log out</button>
                    </div>
                </div>
                    : <div className="flex gap-2">
                        <Link to={"/login"} className="btn">Login</Link>
                        <Link to={"/register"} className="btn">Register</Link>
                    </div>}
            </div>
        </div>
    );
};

export default Navbar;