import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import profilepic from "../../assets/profilepic.png";
import whitelogo from "../../assets/white-only.png";

export default function MenteeDashboardNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("userData"));

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        setUser(parsedData);
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="flex justify-between px-2.5 py-2 bg-black border-b lg:py-2">
        <div>
          <Link to="/menteedashboard">
            <img
              src={whitelogo}
              alt="logo"
              className="w-12 h-10 md:w-16 md:h-14 lg:w-20 lg:h-16"
            />
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
            <div className="absolute right-0 mt-6 w-56 border border-gray-200 rounded-lg shadow-xl md:flex flex-col bg-red-200">
              <div className="py-2">
                <Link to="" className="block text-sm px-4 py-2">
                  My Mentors
                </Link>
                <Link to="" className="block text-sm px-4 py-2 ">
                  Help
                </Link>
                <Link to="" className="block text-sm px-4 py-2 ">
                  Settings
                </Link>
                <Link to="/mentors" className="block text-sm px-4 py-2 ">
                  Browse Mentors
                </Link>
              </div>
              <div className="flex justify-center gap-2 border-t border-t-black py-2 mx-2">
                <div>
                  <img
                    src={profilepic}
                    alt="mentee profile"
                    className="w-10 h-10 border rounded-full"
                  />
                </div>

                <div className="text-white">
                  {user && (
                    <>
                      <p>{user.name}</p>
                      <p className="text-sm">{user.email}</p>
                    </>
                  )}
                  {/* <p>{user.name}</p>
                  <p className="text-sm">{user.email}</p> */}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="hidden md:block">
          <div className="flex gap-8 mr-12 lg:pt-2">
            <Link
              to=""
              className="text-white text-base hover:text-lg hover:underline pt-3"
            >
              My Mentors
            </Link>

            <Link
              to=""
              className="text-white text-base hover:text-lg hover:underline pt-3"
            >
              Help
            </Link>

            <Link
              to=""
              className="text-white text-base hover:text-lg hover:underline pt-3"
            >
              Settings
            </Link>

            <button className="text-base hover:text-indigo-600 bg-white hover:bg-gray-100 p-2 my-2 rounded">
              <Link to="/mentors">Browse mentors</Link>
            </button>

            <div className="flex justify-center gap-2 py-2 lg:ml-48">
              <div>
                <img
                  src={profilepic}
                  alt="mentee profile"
                  className="w-10 h-10 border rounded-full"
                />
              </div>

              <div className="text-white">
                {user && (
                  <>
                    <p>{user.name}</p>
                    <p className="text-sm">{user.email}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
