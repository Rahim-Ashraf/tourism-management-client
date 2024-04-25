import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config"
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const Provider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null)
    const emailRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        // setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        // setLoader(true);
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    const updateUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const data = {
        emailRegister,
        emailLogin,
        googleLogin,
        githubLogin,
        user,
        logOut,
        updateUser
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