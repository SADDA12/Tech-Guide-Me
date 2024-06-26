import { Link } from "react-router-dom";

import mentor6 from "../../assets/m6.png";
import mentor7 from "../../assets/m7.png";
import mentor8 from "../../assets/m8.png";
import mentor9 from "../../assets/m9.png";

import softwaredev from "../../assets/softwaredevelopment.jpeg";

export default function SoftwareDevMentors() {
    return(
        <>
        <section>
              <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${softwaredev})` }}
                ></div>
                 
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-4xl lg:font-bold lg:pt-28">
                    Software Development Mentors
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
                            src={mentor6}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Kayla Bluw
                          </h1>
                          <p>Software developer at Concaris</p>
                          <p className="hidden md:block">
                            7 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            python | java | php | testing
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$25</span> / month
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
                            src={mentor7}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Jorish Mills
                          </h1>
                          <p>Software developer at Vodafone</p>
                          <p className="hidden md:block">
                            2 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            authentication | security | debugging
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$13</span> / month
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
                            src={mentor8}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Jess Carter
                          </h1>
                          <p>Software Engineer at Google</p>
                          <p className="hidden md:block">
                            4 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            data structures | security 
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
                            src={mentor9}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Micheal Gibson
                          </h1>
                          <p>Software developer at Yelp</p>
                          <p className="hidden md:block">
                            10+ years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            software design | cloud 
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
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