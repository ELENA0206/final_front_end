import React, { useState, useEffect } from "react";
import "./Navigation.css";

export default function Navigation() {
  const [screeSize, setScreenSize] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);

  const hideNavigation = () => {
    setMenu(!menu);
  };

  useEffect(()=>{
    const width =()=>{
        setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize',width)
    return () =>{
        window.removeEventListener('resize',width)
    }

  },[])

  return (
    <nav className="navigation-bar">
      {(menu || screeSize > 600) && (
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-list-item">
            <a href="/about">Donation process</a>
          </li>
          <li className="nav-list-item">
            <a href="/info">What to do ?</a>
          </li>
          <li className="nav-list-item">
            <a href="/contact">Contact</a>
          </li>
          <li className="nav-list-item">
             Call us : +111 1111 1111
          </li>
        </ul>
      )}
      <button onClick={hideNavigation} className="menu-button">
      <i className="fa fa-bars fa-bars"></i>
      </button>
    </nav>
  );
}
