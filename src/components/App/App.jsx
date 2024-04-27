import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";


const App = () => {
    const { loading } = useContext(AuthContext);
    return (
        <div>
            {loading && <div className="flex justify-center">
                <span className="loading loading-spinner loading-lg absolute top-20 z-10"></span>
            </div>}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default App;