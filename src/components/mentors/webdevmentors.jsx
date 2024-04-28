
import { Link } from "react-router-dom";

import mentor2 from "../../assets/m2.png";
import mentor3 from "../../assets/m3.png";
import mentor13 from "../../assets/m13.png";
import mentor5 from "../../assets/m5.png";

import webdev from "../../assets/webdev.jpg";

export default function WebDevMentors() {
    return(
        <>
        <section>
              <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${webdev})` }}
                ></div>
                  
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-3xl lg:pt-28 lg:font-bold lg:text-4xl">
                    Web Development & Web Design Mentors
                  </h1>
                </div>
              </div>

              <div className="lg:flex">
                <div className="lg:w-1/2">
                <div className="flex justify-center w-[280px] md:w-4/5 items-center m-8 border bg-gray-100 rounded">
                    <div>
                      <div className="md:flex md:gap-4">
                        <div className="lg:w-1/2">
                          <img
                            src={mentor2}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            George Hernandez
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            frontend | backend | git | version control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$30</span> / month
                          </p>
                          <button className="bg-indigo-600 font-semibold hover:bg-indigo-800 text-white p-2 rounded">
                            <Link to="/bookingform">
                            Book Now
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[280px] md:w-4/5 items-center m-8 border bg-gray-100 rounded">
                    <div>
                      <div className="md:flex md:gap-4">
                        <div className="lg:w-1/2">
                          <img
                            src={mentor3}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Richard Diogo
                          </h1>
                          <p>Frontend developer at Amazon</p>
                          <p className="hidden md:block">
                            5 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            html | css | javascript
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$18</span> / month
                          </p>
                          <button className="bg-indigo-600 font-semibold hover:bg-indigo-800 text-white p-2 rounded">
                            <Link to="/bookingform">
                            Book Now
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                <div className="flex justify-center w-[280px] md:w-4/5 items-center m-8 border bg-gray-100 rounded">
                    <div>
                      <div className="md:flex md:gap-4">
                        <div className="lg:w-1/2">
                          <img
                            src={mentor5}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Michelle Carter
                          </h1>
                          <p>UI / UX designer at LinkedIn</p>
                          <p className="hidden md:block">
                            3 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            UI | UX | Figma
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$15</span> / month
                          </p>
                          <button className="bg-indigo-600 font-semibold hover:bg-indigo-800 text-white p-2 rounded">
                            <Link to="/bookingform">
                            Book Now
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[280px] md:w-4/5 items-center m-8 border bg-gray-100 rounded">
                    <div>
                      <div className="md:flex md:gap-4">
                        <div className="lg:w-1/2">
                          <img
                            src={mentor13}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Tory Grande
                          </h1>
                          <p>Senior UI Designer at Google</p>
                          <p className="hidden md:block">
                            10+ years of experience
                          </p>

                          <p className="font-semibold text-sm">
                           prototyping | motion design | color theory
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$40</span> / month
                          </p>
                          <button className="bg-indigo-600 font-semibold hover:bg-indigo-800 text-white p-2 rounded">
                            <Link to="/bookingform">
                            Book Now
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}