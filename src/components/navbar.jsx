import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="flex justify-between px-2.5 py-2.5 bg-gray-50 border-b lg:py-4">
        <div>
          <h1 className="text-red-600 font-bold md:text-2xl md:mt-2 lg:text-3xl lg:mt-0">LOGO</h1>
        </div>


        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-xs focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
            <div className="absolute right-0 mt-6 w-48 border border-gray-200 rounded-lg shadow-xl md:flex flex-col">
              <div className="py-2">
                <Link
                  to="/"
                  className="block text-sm px-4 py-2"
                >
                  Home
                </Link>
                <Link
                  to="/mentors"
                  className="block text-sm px-4 py-2 "
                >Browse all mentors
                </Link>
                <Link
                  to="/login"
                  className="block text-sm px-4 py-2 "
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:hidden md:block pt-2 md:flex md:gap-12">

          <div>
            <form class="d-flex" role="search" className="flex">
              <input
                class="form-control me-1 h-10 w-80 border border-gray-300 rounded p-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success  me-3" type="submit">
                <i class="fa-solid fa-magnifying-glass text-lg"></i>
              </button>
            </form>
          </div>


          <div>
          <button
            onClick={toggleMenu}
            className="text-xs focus:outline-none"
          >
            <svg
              className="w-8 h-10"
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
            <div className="absolute right-0 mt-6 w-48 border border-gray-200 rounded-lg shadow-xl md:flex flex-col">
              <div className="py-2">
                <Link
                  to="/"
                  className="block text-base px-4 py-2"
                >
                  Home
                </Link>
                <Link
                  to="/mentors"
                  className="block text-base px-4 py-2 "
                >Browse all mentors
                </Link>
                <Link
                  to="/login"
                  className="block text-base px-4 py-2 "
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>

        </div>










        <div className="hidden md:hidden lg:block lg:flex lg:gap-12">

        <div>
            <form class="d-flex" role="search" className="flex">
              <input
                class="form-control me-1 h-10 w-80 border border-gray-300 rounded p-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success  me-3" type="submit">
                <i class="fa-solid fa-magnifying-glass text-lg"></i>
              </button>
            </form>
          </div>

          <div className="flex gap-8 mr-12">
            <Link
              to="/"
              className="text-base hover:text-red-600 pt-1.5"
            >
              Home
            </Link>

            <button className="bg-red-600 hover:bg-red-700 text-white px-3 rounded">
            <Link
              to="/mentors"
              className="text-base"
            >
              Browse All Mentors
            </Link>
            </button>


            <Link
              to="/login"
              className="text-base hover:text-red-600 pt-1.5"
            >
              Login
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
