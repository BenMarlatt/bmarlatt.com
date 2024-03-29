import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return <div>my menu</div>;
};

const NavBarLinks = () => {
  return (
    <>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Projects</NavLink>
      <NavLink to="/">Updates</NavLink>
    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-1/3 flex justify-end">
        <div className="hidden w-full justify-between md:flex">
          <NavBarLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <div>X</div> : <MenuBar />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavBarLinks />
        </div>
      )}
    </>
  );
};

export default NavBar;
