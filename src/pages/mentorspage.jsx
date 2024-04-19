import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";

import mentor1 from "../assets/mentor1.jpeg";
import mentor2 from "../assets/mentor2.jpeg";
import mentor3 from "../assets/mentor3.jpeg";
import mentor4 from "../assets/mentor4.jpeg";
import mentor5 from "../assets/mentor5.jpeg";
import mentor6 from "../assets/mentor6.jpeg";
import mentor7 from "../assets/mentor7.jpeg";
import mentor8 from "../assets/mentor8.jpeg";
import mentor9 from "../assets/mentor9.jpeg";
import mentor10 from "../assets/mentor10.jpeg";
import mentor11 from "../assets/mentor11.jpeg";
import mentor12 from "../assets/mentor12.jpeg";

import aimachine from "../assets/aimachinelearning.jpeg";
import digmarketing from "../assets/digmarketing.jpeg";
import cybersec from "../assets/cybersec.jpeg";
import cloudcomputing from "../assets/cloudcomputing.jpeg";
import data from "../assets/data.jpeg";
import softwaredev from "../assets/softwaredevelopment.jpeg";
import webdev from "../assets/webdev.jpg";
import allmentors from "../assets/allmentors.jpeg";

export default function Mentors() {
  return (
    <>
      <Navbar />

      <section className="border-b py-4">
        <Tabs>
          <TabList>
            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                All Mentors
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Web Development/Design
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Software Development
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Data
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Cloud Computing
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                CyberSecurity
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Digital Marketing
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Ai/Machine Learning
              </button>
            </Tab>
          </TabList>

          <TabPanel id="all-mentors">
            <section>
              <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${allmentors})` }}
                ></div>
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-3xl lg:pt-28">
                    All Mentors
                  </h1>
                </div>
              </div>

              <div className="lg:flex">
                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 bg-gray-100 border rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor12}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Engineering Manager at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          
                          <p className="font-semibold text-sm">
                            Software Engineering | Java | Python | Communication
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$180</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border bg-gray-100 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor1}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
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
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 bg-gray-100 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor6}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Lilian Umeakunne
                          </h1>
                          <p>Software Engineer at Accenture</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

      
                          <p className="font-semibold text-sm">
                            Confidence coaching | Career | Networking
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$150</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 bg-gray-100 border rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor3}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Josep M Felip
                          </h1>
                          <p>SEO Manager at Learning Technologies Group plc</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                        
                          <p className="font-semibold text-sm">
                            SEO | Data Analytics | Digital marketing
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">$300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          <TabPanel id="web-development-design">
            <section>
            <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${webdev})` }}
                ></div>
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-3xl lg:pt-28 lg:font-bold lg:text-4xl">
                    Web Development & Web Design Mentors
                  </h1>
                </div>
              </div>

              <div className="lg:flex">
                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor2}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            <Link to="/mentordetails">View profile</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor3}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor4}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor5}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          <TabPanel id="software-development">
            <section>
            <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${softwaredev})` }}
                ></div>
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-4xl lg:font-bold lg:pt-28">
                    Software Development Mentors
                  </h1>
                </div>
              </div>

              <div className="lg:flex">
                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor6}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor7}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor8}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor9}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          <TabPanel id="data-mentors">
            <section>
            <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${data})` }}
                ></div>
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-4xl lg:font-bold lg:pt-28">
                    Data Analytics & Data Science Mentors
                  </h1>
                </div>
              </div>

              <div className="lg:flex">
                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor10}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor11}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor12}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor1}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          <TabPanel id="cloud-computing">
            <section>
            <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${cloudcomputing})` }}
                ></div>
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-4xl lg:font-bold lg:pt-28">
                    Cloud Computing Mentors
                  </h1>
                </div>
              </div>

              <div className="lg:flex">
                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor2}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor3}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor4}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor5}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          <TabPanel id="cybersecurity">
            <section>
            <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${cybersec})` }}
                ></div>
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-4xl lg:font-bold lg:pt-28">
                    Cyber Security Mentors
                  </h1>
                </div>
              </div>

              <div className="lg:flex">
                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor6}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor7}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor8}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor9}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          <TabPanel id="digital-marketing">
            <section>
            <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${digmarketing})` }}
                ></div>
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-4xl lg:font-bold lg:pt-28">
                    Digital Marketing Mentors
                  </h1>
                </div>
              </div>

              <div className="lg:flex">
                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor10}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor11}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor12}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor1}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>

          <TabPanel id="ai-machine-learning">
            <section>
            <div className="relative h-32 md:h-48 lg:h-72">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${aimachine})` }}
                ></div>
                <div className="relative z-10">
                  <h1 className="text-xl text-center font-semibold text-white pt-10 md:text-2xl md:pt-20 lg:text-4xl lg:font-bold lg:pt-28">
                    AI & Machine Learning Mentors
                  </h1>
                </div>
              </div>

              <div className="lg:flex">
                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor2}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor3}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor4}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center w-[330px] md:w-4/5 items-center m-8 border border-red-600 rounded">
                    <div>
                      <div className="p-2 md:flex md:gap-4">
                        <div>
                          <img
                            src={mentor5}
                            alt="mentor profile"
                            className="rounded w-full md:h-48"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-lg">
                            Micheal Kors
                          </h1>
                          <p>Senior Web developer at Yelp</p>
                          <p className="hidden md:block">
                            10 years of experience
                          </p>

                          <p className="w-[300px] my-4">
                            I'm a passionate web developer with over 8 years of
                            experience crafting digital experiences that engage
                            and delight users. My journey in web development
                            started with a curiosity for coding, and it has
                            evolved into a deep understanding of front-end and
                            back-end technologies.
                          </p>
                          <p className="font-semibold text-sm">
                            Frontend | Backend | UI/UX | Version Control
                          </p>
                          <p className="font-semibold">
                            <span className="text-xl">Ghs300</span> / month
                          </p>
                          <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                            View profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
        </Tabs>
      </section>

      <Footer />
    </>
  );
}
