import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hook";

const Nav: React.FC = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const cart = useAppSelector((state) => state.allProducts.cart);

  //SHOW USER
  const [user, setUser] = useState("Welcome");

  const logIn = (response: any) => {
    setIsLoggedIn(false);

    setUser(response.profileObj.name);
    // REDIRECT TO SHOP IF LOGIN
    history.push("/shop");
  };

  const logOut = () => {
    setIsLoggedIn(true);

    setUser("WELCOME");
    //REDIRECT TO LOGIN PAGE
    history.push("/");
  };

  return (
    <>
      <Header>
        <div>
          <h3>{user}</h3>
          <Link to="/shop">
            <h6>SHOP</h6>
          </Link>
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
        </div>
        {!isLoggedIn && (
          <div>
            <Link to="/cart">CART ITEMS:{cart.length}</Link>
          </div>
        )}
      </Header>
    </>
  );
};

export default Nav;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 50px;
  justify-content: space-between;
  background: #f3f3f3;
  color: #000;
  a {
    color: #000;
    font-size: 50px;
  }
`;
