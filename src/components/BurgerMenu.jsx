import React, { useState } from "react";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <nav className="navigation">
          <ul>
            <li>
              <a href="/toprated">Top rated</a>
            </li>
            <li>
              <a href="/upcoming">Up Coming</a>
            </li>
          </ul>
        </nav>
      )}
      <div
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </>
  );
}

export default BurgerMenu;
