"use client";

import Image from "next/image";
import menu from "/public/assets/icons/left-sidebar/hamburger.svg";
import { useState } from "react";
import { X } from "lucide-react";
import LeftSidebar from "./LeftSidebar";
import SiteLogo from "./SiteLogo";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="flex md:hidden bg-black-1 text-white-1 fixed top-0 flex-row justify-between w-full py-4 px-4 sm:px-12 z-50">
      <SiteLogo />
      {isOpen ? (
        <div
          className={`cursor-pointer ${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-all duration-400 ease-in-out flex items-center justify-center`}
          onClick={handleClick}
        >
          <X color={"#F97535"} />
        </div>
      ) : (
        <Image
          src={menu}
          alt="menu"
          width={24}
          height={24}
          className={`cursor-pointer ${
            isOpen ? "opacity-0" : "opacity-100"
          } transition-all duration-400 ease-in-out`}
          onClick={handleClick}
        />
      )}
      <LeftSidebar className="flex" isOpen={isOpen} />
    </header>
  );
};

export default MobileNav;
