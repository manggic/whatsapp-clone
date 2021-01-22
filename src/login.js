import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("result--->", result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        var errorMessage = error.message;
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://i0.wp.com/www.ctsnet.edu/wp-content/uploads/2019/09/whatsapp-logo-icon.png?ssl=1"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to watsapp</h1>
        </div>
        <Button onClick={signin}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
