import React, { useState } from "react";
import { Link } from "react-router-dom";

import whitehorizontal from "../../assets/white-horizontal.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="flex justify-between px-2.5 py-2 bg-black border-b border-slate-500 lg:py-2 lg:px-8">
        <div>
          <Link to="/">
          <img src={whitehorizontal} alt="logo" className="w-36 h-10 md:w-48 md:h-12 lg:w-56 lg:h-16"/>
          </Link>
        </div>


        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-xs text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 mt-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-6 w-48 border border-gray-200 rounded-lg shadow-xl md:flex flex-col bg-gray-100">
              <div className="py-2">
                <Link
                  to="/signupmentor"
                  className="block text-sm px-4 py-2"
                >
                  Become A Mentor
                </Link>

                <Link
                  to=""
                  className="block text-sm px-4 py-2"
                >
                  Newsletter
                </Link>

                <Link
                  to="/login"
                  className="block text-sm px-4 py-2 "
                >
                  Login
                </Link>

                <Link
                  to="/signupmentee"
                  className="block text-sm px-4 py-2 "
                >
                  Signup
                </Link>
              </div>
            </div>
          )}
        </div>



        <div className="hidden md:block ">

    

          <div className="flex gap-4 text-white font-semibold mt-4 lg:gap-10">

            <Link to="/signupmentor" className="hover:text-slate-400">Become A mentor</Link>

            <Link className="hover:text-slate-400">Newsletter</Link>

            <Link to="/login" className="border rounded px-2 py-1 mb-1 lg:text lg:px-4 hover:text-slate-400 hover:border-slate-400">Login</Link>

            <Link to="/signupmentee" className="rounded px-2 py-1 mb-1 bg-violet-500 hover:bg-violet-700 lg:px-4">Signup</Link>
           
          </div>

        </div>
      </section>
    </>
  );
}
