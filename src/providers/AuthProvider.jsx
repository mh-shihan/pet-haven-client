import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = (props = {}) => {
  const { children } = props || {};
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecureInstance = useAxios();

  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("On Auth State change :", currentUser);
      const userEmail = user?.email || currentUser?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axiosSecureInstance
          .post("/auth/access-token", loggedUser)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user, axiosSecureInstance]);

  const authInfo = {
    auth,
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUser,
    setUser,
    googleSignIn,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
