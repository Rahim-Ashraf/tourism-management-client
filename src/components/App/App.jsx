import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Tourism Management</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default App;