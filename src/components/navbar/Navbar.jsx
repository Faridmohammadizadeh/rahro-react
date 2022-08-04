import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">منتورینگ</a>
    </p>
    <p>
      <a href="#home">مقاله ها</a>
    </p>
    <p>
      <a href="#home">درباره ما</a>
    </p>
  </>
);
const Login = () => (
  <>
   <button type="button">ورود / ثبت نام</button>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="rahro__navbar">
      <div className="rahro__navbar-links">
        <div className="rahro__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="rahro__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="rahro__navbar-sign">
        <Login />
      </div>
      <div className="rahro__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#1d1d1d"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#1d1d1d"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="rahro__navbar-menu_container scale-up-center">
            <div className="rahro__navbar-menu_container-links">
              <Menu />
              <div className="rahro__navbar-menu_container-links-sign ">
              <Login/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
