import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";

const Nav: React.FC = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logIn = (response: any) => {
    setIsLoggedIn(true);

    // REDIRECT TO SHOP IF LOGIN
    history.push("/shop");

    //RETURN NAME OF USER
    return response.profileObj.name;
  };
  const logOut = () => {
    setIsLoggedIn(false);
    //REDIRECT TO LOGIN PAGE
    history.push("/");
  };
  return (
    <>
      <header>
        {!isLoggedIn && (
          <GoogleLogin
            clientId={`${process.env.REACT_APP_CLIENT_ID}`}
            onSuccess={logIn}
            isSignedIn={true}
          />
        )}
        {isLoggedIn && (
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
