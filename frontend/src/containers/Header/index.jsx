import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="bg-dark-background sticky top-0 flex-wrap z-[20] mx-auto flex f-full items-center justify-between border-b border-gray-500 p-4">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
