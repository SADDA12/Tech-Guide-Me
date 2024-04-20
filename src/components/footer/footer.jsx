import React from "react";
import { Link } from "react-router-dom";

import redhorizontal from "../../assets/redhorizantal.png";

export default function Footer() {
    return(
        <>
        <section class="relative bg-gray-50 pt-8 pb-6 border-t">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <Link to="/">
            <img src={redhorizontal} alt="logo" className="w-44 h-14 md:w-52 md:h-16 lg:w-60 lg:h-20"/>
            </Link>
            <h5 class="text-lg mt-0 mb-2">
              Your trusted source to find highly vetted mentors & industry professionals to move your career ahead.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
            <button
                class="bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fa-brands fa-facebook"></i>
              </button>
              <button
                class="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fa-brands fa-instagram"></i>
              </button>
              <button
                class="bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fa-brands fa-linkedin"></i>
              </button>
              <button
                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-slate-400 hover:underline font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-slate-400 hover:underline font-semibold block pb-2 text-sm"
                      href="/mentors"
                    >
                      Browse Mentors
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-slate-400 hover:underline font-semibold block pb-2 text-sm"
                      href="/mentors"
                    >
                      Book A Session
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-sm font-semibold mb-2">
                  SECURITY
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-slate-400 hover:underline font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-slate-400 hover:underline font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-slate-400 hover:underline font-semibold block pb-2 text-sm"
                      href="mailto:yourmail@domain.com"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>{" "}
              <a href="/" class="text-red-600 hover:underline">
                TechMentor
              </a>
              .All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}