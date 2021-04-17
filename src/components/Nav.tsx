import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";
import { useAppDispatch } from "../redux/hook";
import { reset } from "../redux/PostSlice";

const Nav: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logIn = (response: any) => {
    setIsLoggedIn(false);

    // REDIRECT TO SHOP IF LOGIN
    history.push("/shop");

    //RETURN NAME OF USER
    return response.profileObj.name;
  };
  const logOut = () => {
    setIsLoggedIn(true);

    dispatch(reset());
    //REDIRECT TO LOGIN PAGE
    history.push("/");
  };

  return (
    <>
      <header>
        {isLoggedIn && (
          <GoogleLogin
            clientId={`${process.env.REACT_APP_CLIENT_ID}`}
            onSuccess={logIn}
            isSignedIn={true}
          />
        )}
        {!isLoggedIn && (
          <GoogleLogout
            clientId={`${process.env.REACT_APP_CLIENT_ID}`}
            onLogoutSuccess={logOut}
          />
        )}
      </header>
    </>
  );
};

export default Nav;
