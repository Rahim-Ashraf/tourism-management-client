import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config"
import { createContext } from "react";

export const AuthContext = createContext(null)

const Provider = ({ children }) => {
    const auth = getAuth(app);
    const emailLogin = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const data = {
        emailLogin,
    }
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Provider;