import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  return (
    <>
      <nav className="bg-white  border-gray-200">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center  rtl:space-x-reverse">
            <img src={"/assets/images/logo.png"} className="h-10 " alt="Book Doctor Logo" />
            <span className="self-center md:text-2xl text-lg font-semibold whitespace-nowrap text-[#061A3A] ">
              Book Doctor
            </span>
          </a>
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
            aria-controls="navbar-solid-bg"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? " block " : " hidden "
            } w-full md:hidden md:w-auto transition-all  `}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg  md:space-x-8 ">
              {[
                { title: "Home", link: "/" },
                { title: "My Appointment", link: "/my-appointment" },
              ].map((item) => (
                <li className=" ">
                  <NavLink
                    to={item.link}
                    key={item.title}
                    onClick={handleToggle}
                    className={({ isActive }) =>
                      `text-gray-700 block px-3 py-4 text-sm rounded-sm w-full border-b-2 border-gray-100
hover:bg-[#10ABC7] hover:text-white 
focus:bg-[#10ABC7] focus:text-white
focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
${isActive ? "bg-[#10ABC7] text-white" : ""}`
                    }
                    aria-current="page"
                    role="link"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <nav className=" bg-gray-700  md:block hidden">
        <div className="max-w-screen-xl px-10 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink
                  to="/"
                  className="text-white hover:underline "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-appointment"
                  className="text-white hover:underline"
                  aria-current="page"
                >
                  My Appointment
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
