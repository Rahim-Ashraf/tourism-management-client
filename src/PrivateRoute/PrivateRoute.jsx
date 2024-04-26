import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import Login from "../components/Login/Login";


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {user ? children : <Login></Login>}
        </div>
    );
};

export default PrivateRoute;