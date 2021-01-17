import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("srcoll");
    }
  }, []);

  return(
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
        className="nav__logo"
      />
      <img
        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1920px-Firebase_Logo.svg.png"
        src="https://thumbs.dreamstime.com/b/yummy-icon-hungry-smiling-face-mouth-tongue-emoji-delicious-healthy-funny-lunch-tasty-mood-smile-avatar-happy-yellow-143922365.jpg"
        alt="firebase logo"
        className="nav__avatar"
      />
    </div>
  )
}

export default Nav;
