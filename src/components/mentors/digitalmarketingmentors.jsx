import { Link } from "react-router-dom";

import mentor1 from "../../assets/m1.png";
import mentor10 from "../../assets/m10.png";
import mentor11 from "../../assets/m11.png";
import mentor12 from "../../assets/m12.png";

import digmarketing from "../../assets/digmarketing.jpeg";

export default function DigitalMarketingMentors() {
    return(
        <>
        <section>
              <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${digmarketing})` }}
                ></div>
                  
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-4xl lg:font-bold lg:pt-28">
                    Digital Marketing Mentors
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
                            src={mentor10}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
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

                  <div className="flex justify-center w-[280px] md:w-4/5 items-center m-8 border bg-gray-100 rounded">
                    <div>
                      <div className="md:flex md:gap-4">
                        <div className="lg:w-1/2">
                          <img
                            src={mentor11}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div className="lg:w-1/2">
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
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
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
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
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
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