import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./context";
import "./Header.css";

function Header() {
  const context = useContext(MyContext);

  console.log("context", context);

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img className='header__image' src='https://www.pinclipart.com/picdir/middle/329-3292578_vector-music-png-logo-clipart.png' />
        </Link>
        <Link to="/">Home</Link>
      </div>
      <div className='header__right'>{context?.name ? <Link to='/' >Signout</Link> : <Link to='/' >Signin</Link>}</div>
    </div>
  );
}

export default Header;
