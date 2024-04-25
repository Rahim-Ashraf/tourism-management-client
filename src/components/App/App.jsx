import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";


const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Tourism Management</h1>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default App;