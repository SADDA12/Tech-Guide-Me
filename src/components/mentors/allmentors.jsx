import { Link } from "react-router-dom";

import mentor1 from "../../assets/m1.png";
import mentor3 from "../../assets/m3.png";
import mentor6 from "../../assets/m6.png";
import mentor12 from "../../assets/m12.png";

import allmentors from "../../assets/allmentors.jpeg";

export default function AllMentors() {
    return(
        <>
        <section>
              <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${allmentors})` }}
                ></div>
              
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-3xl lg:pt-28">
                    All Mentors
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
                            src={mentor1}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            James Boakye
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
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
                            Kwasi Blankson
                          </h1>
                          <p>Dev Ops Engineer at Uber</p>
                          <p className="hidden md:block">
                            8 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            configuration management | deployment
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$28</span> / month
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
                            src={mentor6}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Diane Kors
                          </h1>
                          <p>Data Analyst at Kumfrey</p>
                          <p className="hidden md:block">
                            5 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            cleaning | visualization 
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$20</span> / month
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
                            src={mentor12}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Kimmy Chun
                          </h1>
                          <p>Cybersecurity Specialist at Mtn</p>
                          <p className="hidden md:block">
                            4 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            network security | firewall management
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
              </div>
            </section>
        </>
    )
}