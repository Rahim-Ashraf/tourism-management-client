import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import Login from "../components/Login/Login";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    return (
        <div>
            {
                loading ? <div className="w-full flex justify-center">
                    <span className="loading loading-spinner loading-lg flex justify-center items-center h-screen"></span>
                </div> :
                    user ? children :
                        <Navigate to={"/login"}></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;