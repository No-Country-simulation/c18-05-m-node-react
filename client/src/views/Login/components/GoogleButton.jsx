import {
  GoogleAuthProvider,
  //   getAuth,
  //   signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/Credentials";

const GoogleButton = () => {
  const [value, setValue] = useState("");
  console.log("test googlebutton:", value);

  const handleClick = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <button size="sm" type="submit" onClick={handleClick}>
        Accede con Google
      </button>
      <button onClick={logout}>Logout</button>;
    </>
  );
};

export default GoogleButton;
