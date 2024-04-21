import React, { useState } from "react";
import { Link } from "react-router-dom";

import profilepic from "../../assets/profilepic.png";
import whitehorizontal from "../../assets/whitehorizontal.png";

export default function MentorDashboardNavbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <>
        <section className="bg-red-800 px-2.5 py-2 flex justify-between md:py-3 lg:px-6">

            <div className="hidden md:hidden lg:block">
                <img src={whitehorizontal} alt="logo" className="w-48 h-14"/>
            </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-xs text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 border rounded md:w-8 md:h-8 mt-2"
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
            <div className="absolute left-0 mt-6 w-48 border border-gray-200 rounded-lg shadow-xl md:flex flex-col bg-gray-100 md:w-56 md:py-4">
              <div className="py-2">
                <Link
                  to="/mentordashboard"
                  className="block text-sm px-4 py-2 md:text-lg"
                >
                  <i class="fa-solid fa-house mr-2"></i>
                  Home
                </Link>
                <Link
                  to="/mentormessages"
                  className="block text-sm px-4 py-2 md:text-lg"
                >
                  <i class="fa-solid fa-message mr-2"></i>
                  Messages
                </Link>
                <Link
                  to="/mymentees"
                  className="block text-sm px-4 py-2 md:text-lg"
                >
                  <i class="fa-solid fa-user-graduate mr-2"></i>
                  My Mentees
                </Link>
                <Link
                  to=""
                  className="block text-sm px-4 py-2 md:text-lg"
                >
                  <i class="fa-solid fa-clock mr-2"></i>
                  Bookings
                </Link>
                <Link
                  to=""
                  className="block text-sm px-4 py-2 md:text-lg"
                >
                  <i class="fa-solid fa-gear mr-2"></i>
                  Settings
                </Link>
                <Link
                  to=""
                  className="block text-sm px-4 py-2 md:text-lg"
                >
                  <i class="fa-solid fa-lock mr-2"></i>
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>  
        <div className="flex gap-2">
            <div>
                <img src={profilepic} alt="mentor profile" className="w-10 h-10 md:w-14 md:h-14 rounded-full"/>
            </div>

            <div>
                <h4 className="text-white font-semibold md:text-lg">James Brown</h4>
                <p className="text-sm text-slate-300">brownj82@gmail.com</p>

            </div>
        </div>          
        </section>
        </>
    )
}