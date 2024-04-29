import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { Tooltip } from 'react-tooltip';


const Navbar = () => {
    const [hoverEffect, setHoverEffect] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
    }
    const handleMouseOver = () => {
        setHoverEffect(true)
    }
    const handleMouseOut = () => {
        setHoverEffect(false)
    }

    const [theme, setTheme] = useState(true)
    const handleThemeControl = () => {
        theme ? document.querySelector('html').setAttribute('data-theme', "dark") : document.querySelector('html').setAttribute('data-theme', "light");

        setTheme(!theme)
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to={"/"} className={({ isActive }) =>
                            isActive ? "btn btn-active" : "btn"}>Home</NavLink>
                        <NavLink to={"/all-tourists-spot"} className={({ isActive }) =>
                            isActive ? "btn btn-active" : "btn"}>All Tourists Spot</NavLink>
                        {user && <div>
                            <NavLink to={"/add-tourists-spot"} className={({ isActive }) =>
                                isActive ? "btn btn-active w-full" : "btn w-full"}>Add Tourists Spot</NavLink>
                            <NavLink to={`/my-list/${user?.email}`} className={({ isActive }) =>
                                isActive ? "btn btn-active w-full" : "btn w-full"}>My List</NavLink>
                        </div>}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl">Dream Tour</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <NavLink to={"/"} className={({ isActive }) =>
                        isActive ? "btn btn-active" : "btn"}>Home</NavLink>
                    <NavLink to={"/all-tourists-spot"} className={({ isActive }) =>
                        isActive ? "btn btn-active" : "btn"}>All Tourists Spot</NavLink>
                    {user && <div>
                        <NavLink to={"/add-tourists-spot"} className={({ isActive }) =>
                            isActive ? "btn btn-active mr-4" : "btn mr-4"}>Add Tourists Spot</NavLink>
                        <NavLink to={`/my-list/${user?.email}`} className={({ isActive }) =>
                            isActive ? "btn btn-active" : "btn"}>My List</NavLink>
                    </div>}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <div data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}
                    onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="relative mr-8 z-10">
                    <div className="avatar cursor-pointer">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <Tooltip id="my-tooltip" place="left" className="z-10" />
                    <div className={hoverEffect ? "block absolute w-28" : "hidden absolute w-28"}>
                        <button onClick={handleLogOut} className="btn bg-red-600 border-none text-white mt-2">Log out</button>
                    </div>
                </div>
                    : <div className="flex gap-2">
                        <Link to={"/login"} className="btn">Login</Link>
                        <Link to={"/register"} className="btn">Register</Link>
                    </div>}
            </div>
            <label className="cursor-pointer grid place-items-center">
                <input onClick={handleThemeControl} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </label>
        </div>
    );
};

export default Navbar;