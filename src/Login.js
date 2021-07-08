import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://tucano.org.br/wp-content/uploads/2020/04/whatsapp.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp.</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In With Google.
        </Button>
      </div>
    </div>
  );
}

export default Login;
