import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>404 Not found</h2>
            <p>go to <Link className="btn" to={"/"}>Home</Link> page</p>
        </div>
    );
};

export default ErrorPage;