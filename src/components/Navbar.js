import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { PencilIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect for setting document title
  useEffect(() => {
    document.title = "EmergingWorld";
  }, []);

  // useEffect for adding scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 80 ? setScroll(true) : setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        scroll
          ? "navbar-scroll  z-50 delay-50 rounded-xl"
          : "bg-white border-gray-200 dark:bg-gray-900"
      }
    >
    <div className={scroll?"relative h-24    flex items-center justify-between p-5":"relative h-24 bg-[#a67212]  flex items-center justify-between p-5"}>
      <div className="min-w-0 flex-1">
        <h2
          className="text-2xl font-bold leading-7 text-black sm:truncate
         sm:text-3xl sm:tracking-tight"
          style={{ fontFamily: "Young Serif" }}
        >
          Outstanding Bihar
        </h2>
      </div>

      <div className="min-w-0 flex-1">
        {/* Your logo */}
        <img
          src={require("../assets/logo.jpg")} // Replace with the path to your logo image
          alt="Logo"
          className=" relative  left-4 h-[6em] w-auto" // Adjust the height as needed
        />
      </div>

      <div className="mt-5 flex lg:ml-4 lg:mt-0 space-x-4">
        <span className="hidden sm:block">
          <a
            href="/"
            type="button"
            className="inline-flex items-center rounded-md bg-white px-5 py-4 
            text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset
             ring-gray-300 hover:bg-gray-50"
            style={{ fontFamily: "Young Serif" }}
          >
            <AiFillHome
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Home
          </a>
        </span>

        <span className="hidden sm:block">
          <a
            href="/About"
            type="button"
            className="inline-flex items-center rounded-md bg-white px-5 py-4 text-sm 
            font-semibold text-gray-900 shadow-sm ring-1 ring-inset
             ring-gray-300 hover:bg-gray-50"
            style={{ fontFamily: "Young Serif" }}
          >
            <PencilIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            About
          </a>
        </span>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
