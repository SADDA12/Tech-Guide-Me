import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import ceo from "../../assets/ceo.png";
import webdev from "../../assets/webdev.jpg";
import data from "../../assets/datascience.jpg";
import uiux from "../../assets/uiux.jpg";
import cloudcomputing from "../../assets/cloudcomputing.jpg";
import mentee1 from "../../assets/mentee1.jpeg";
import mentee2 from "../../assets/mentee2.jpeg";
import mentee3 from "../../assets/mentee3.jpeg";
import mentee4 from "../../assets/mentee4.jpeg";

import mentor1 from "../../assets/m1.png";
import mentor2 from "../../assets/m2.png";
import mentor3 from "../../assets/m3.png";
import mentor4 from "../../assets/m4.png";
import mentor5 from "../../assets/m5.png";
import mentor6 from "../../assets/m6.png";
import mentor7 from "../../assets/m7.png";
import mentor8 from "../../assets/m8.png";
import mentor9 from "../../assets/m9.png";

import fourmentors from "../../assets/forumentors (1).png";


export default function LandingPage() {
  return (
    <>
      <Navbar />

      <section id="hero-section" className="bg-gradient-to-b from-black to-purple-900 py-16 px-10 lg:px-56">
        <div className="bg-purple-950 border border-violet-200 rounded">
        <h1 className="text-white p-2 text-center">Tech Guide Me! An all-in-one platform for tech enthusiasts and mentoring packages at a flexible price<i class="fa-solid fa-sack-dollar ml-2"></i></h1>
        </div>
      </section>

      <section className="flex bg-gradient-to-b from-purple-900 to-black">
        <section className="py-4 lg:py-12 md:w-9/12 lg:w-1/2">
          <div className="mx-4 my-6">
            <p className="text-white text-sm md:text-base lg:text-lg">
              Learn a new skill, launch a project, land your dream career !
            </p>
          </div>

          <div className="mx-4 my-6">
            <p className="text-white text-3xl font-semibold lg:text-4xl">1-on-1</p>

            <div>
              <ReactTyped
                className="text-indigo-300 text-3xl font-semibold"
                strings={[
                  "Web development",
                  "Software development",
                  "Data",
                  "Cloud computing",
                  "UI/UX",
                  "Cyber security",
                  "Digital marketing",
                  "AI and Machine learning",
                ]}
                typeSpeed={50}
              />
            </div>

            <p className="text-white text-3xl font-semibold lg:text-4xl">Mentorship</p>
          </div>

          <div className="mx-4">
            <button className="bg-violet-500 mr-2 font-semibold hover:bg-violet-700 text-white p-2 rounded">
              <Link to="/signupmentee" className="text-base">
                Find Mentors
              </Link>
            </button>

            <button className="border border-violet-300 mx-2 font-semibold hover:bg-violet-700 text-white p-2 rounded">
              <Link to="/signupmentor" className="text-base">
                Become A Mentor
              </Link>
            </button>

            <div className="mt-2 flex gap-1 text-xs md:text-sm">
              <button className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full md:px-2">
                Web Developers
              </button>

              <button className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full md:px-2">
                Software Engineers
              </button>

              <button className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full md:px-2">
                UI/UX Designers
              </button>

              <button className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full md:px-2">
                Data Scientists
              </button>
            </div>
          </div>
        </section>

        <section className="hidden md:block  w-3/12 lg:w-1/2 pr-4 py-10">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full h-60 lg:h-96"
          >
            <SwiperSlide>

              <div className="bg-gray-100 p-2 lg:flex lg:gap-4">
                <div>
                <img
                            src={mentor1}
                            alt="mentor profile"
                            className="rounded"
                          />
                </div>
                <div>
                <h1 className="font-semibold text-lg">Micheal Kors</h1>
                 <p>Senior Web developer at Yelp</p>
                 <p className="font-semibold text-sm">Frontend | Backend | UI/UX | Version Control</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="bg-gray-100 p-2 lg:flex lg:gap-4">
                <div>
                <img
                            src={mentor2}
                            alt="mentor profile"
                            className="rounded"
                          />
                </div>
                <div>
                <h1 className="font-semibold text-lg">Micheal Kors</h1>
                 <p>Senior Web developer at Yelp</p>
                 <p className="font-semibold text-sm">Frontend | Backend | UI/UX | Version Control</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-gray-100 p-2 lg:flex lg:gap-4">
                <div>
                <img
                            src={mentor3}
                            alt="mentor profile"
                            className="rounded"
                          />
                </div>
                <div>
                <h1 className="font-semibold text-lg">Micheal Kors</h1>
                 <p>Senior Web developer at Yelp</p>
                 <p className="font-semibold text-sm">Frontend | Backend | UI/UX | Version Control</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-gray-100 p-2 lg:flex lg:gap-4">
                <div>
                <img
                            src={mentor4}
                            alt="mentor profile"
                            className="rounded"
                          />
                </div>
                <div>
                <h1 className="font-semibold text-lg">Micheal Kors</h1>
                 <p>Senior Web developer at Yelp</p>
                 <p className="font-semibold text-sm">Frontend | Backend | UI/UX | Version Control</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-gray-100 p-2 lg:flex lg:gap-4">
                <div>
                <img
                            src={mentor5}
                            alt="mentor profile"
                            className="rounded"
                          />
                </div>
                <div>
                <h1 className="font-semibold text-lg">Micheal Kors</h1>
                 <p>Senior Web developer at Yelp</p>
                 <p className="font-semibold text-sm">Frontend | Backend | UI/UX | Version Control</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-gray-100 p-2 lg:flex lg:gap-4">
                <div>
                <img
                            src={mentor6}
                            alt="mentor profile"
                            className="rounded"
                          />
                </div>
                <div>
                <h1 className="font-semibold text-lg">Micheal Kors</h1>
                 <p>Senior Web developer at Yelp</p>
                 <p className="font-semibold text-sm">Frontend | Backend | UI/UX | Version Control</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-gray-100 p-2 lg:flex lg:gap-4">
                <div>
                <img
                            src={mentor7}
                            alt="mentor profile"
                            className="rounded"
                          />
                </div>
                <div>
                <h1 className="font-semibold text-lg">Micheal Kors</h1>
                 <p>Senior Web developer at Yelp</p>
                 <p className="font-semibold text-sm">Frontend | Backend | UI/UX | Version Control</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-gray-100 p-2 lg:flex lg:gap-4">
                <div>
                <img
                            src={mentor8}
                            alt="mentor profile"
                            className="rounded"
                          />
                </div>
                <div>
                <h1 className="font-semibold text-lg">Micheal Kors</h1>
                 <p>Senior Web developer at Yelp</p>
                 <p className="font-semibold text-sm">Frontend | Backend | UI/UX | Version Control</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-gray-100 p-2 lg:flex lg:gap-4">
                <div>
                <img
                            src={mentor9}
                            alt="mentor profile"
                            className="rounded"
                          />
                </div>
                <div>
                <h1 className="font-semibold text-lg">Micheal Kors</h1>
                 <p>Senior Web developer at Yelp</p>
                 <p className="font-semibold text-sm">Frontend | Backend | UI/UX | Version Control</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>

      <section id="ceo-section" className="bg-gradient-to-b from-black to-purple-900 md:p-16">
        <div>
          <div className="bg-gray-100 py-10 rounded-lg lg:flex lg:py-16">
            <div id="CEOPROFILE" className="lg:w-2/5">
              <div className="flex justify-center">
                <div className="bg-violet-500 rounded p-2 lg:p-4">
                  <div className="flex justify-between">
                    <div className="mt-8">
                      <p className="font-semibold lg:text-xl">James Morgan</p>
                      <p className="text-sm lg:text-base">CEO</p>
                    </div>
                    <div>
                      <img
                        src={ceo}
                        alt="ceo profile"
                        className="w-24 h-18 lg:w-32"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-100 my-1 rounded pl-1 text-sm lg:text-base lg:my-2">
                    Intro Session
                  </div>

                  <div className="bg-gray-100  rounded pl-1 text-sm lg:text-base">
                    Cv Review
                  </div>

                  <div className="bg-gray-100 my-1 rounded pl-1 text-sm lg:text-base lg:my-2">
                    Expert Session
                  </div>
                </div>
              </div>
            </div>

            <div id="YTVTYVFTG" className="lg:w-3/5">
              <div className="">
                <div className="m-6">
                  <h1 className="text-xl font-semibold text-indigo-600 lg:text-2xl">
                    At your fingertips: a dedicated tech career coach
                  </h1>

                  <p className="lg:text-lg">
                    Want to start a new dream career in tech? Successfully build
                    your tech startup? Itching to learn high-demand skills? Work
                    smart with an online mentor by your side to offer expert
                    advice and guidance to match your zeal. Become unstoppable
                    using <span className="text-indigo-600">TechGuideMe.</span>
                  </p>
                </div>
              </div>

              <div className="mx-6">
                <div className="md:flex md:gap-24">
                  <div>
                    <p className="my-1">
                      <i class="fa-solid fa-circle-check mr-2"></i>Thousands of
                      mentors available
                    </p>

                    <p className="my-1">
                      <i class="fa-solid fa-circle-check mr-2"></i>Flexible
                      program structures
                    </p>

                    <p className="my-1">
                      <i class="fa-solid fa-circle-check mr-2"></i>Personal
                      chats
                    </p>
                  </div>

                  <div>
                    <p className="my-1">
                      <i class="fa-solid fa-circle-check mr-2"></i>1-on-1 calls
                    </p>

                    <p className="my-1">
                      <i class="fa-solid fa-circle-check mr-2"></i>98%
                      satisfaction rate
                    </p>
                  </div>
                </div>

                <button className="bg-black font-semibold hover:bg-indigo-600 text-white p-2 rounded my-2">
                  <Link to="/login">Find a mentor</Link>
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-purple-900 to-black px-6 py-10 md:flex">
        <div className="md:w-1/2">
        <h1 className="text-3xl text-center text-white font-bold lg:text-4xl">Connect and Learn with the <span className="text-indigo-300">Best Online Tech Mentors</span></h1>
        <p className="text-center my-6 text-white lg:text-lg">Tech Guide Me is a community for Tech Enthusiasts. Engage in and benefit from 1-on-1 Mentorship and access to mentorship packages.</p>

        <div className="flex justify-center">
        <button className="text-white bg-indigo-500 hover:bg-indigo-600 p-2 rounded">Join TechGuideMe</button>
        </div>
        </div>

        <div className="my-10 md:w-1/2">
          <img src={fourmentors} alt="four mentors" />
        </div>

      </section>

      <section id="explore-mentors-section" className="bg-gradient-to-b from-black to-purple-900 px-6 py-10">
        <div className="my-4">
          <p className="text-white text-center text-xl font-semibold md:text-2xl">
            Explore 100+ Available mentors
          </p>
        </div>

        <div>
          <div className="md:flex lg:gap-8">
            <div className="lg:flex">
              <div className="my-10">
                <Link to="">
                  <div className="flex justify-center">
                    <img
                      src={webdev}
                      alt="web development illustration"
                      className="w-5/6 h-48 rounded-lg"
                    />
                  </div>
                  <p className="text-white text-center font-semibold mt-2 md:text-lg">
                    Web Development Mentors
                  </p>
                </Link>
              </div>

              <div className="my-10">
                <Link to="">
                  <div className="flex justify-center">
                    <img
                      src={data}
                      alt="data science illustration"
                      className="w-5/6 h-48 rounded-lg lg:w-full"
                    />
                  </div>
                  <p className="text-white text-center font-semibold mt-2 md:text-lg">
                    Data Science Mentors{" "}
                  </p>
                </Link>
              </div>
            </div>

            <div className="lg:flex ">
              <div className="my-10">
                <Link to="">
                  <div className="flex justify-center">
                    <img
                      src={uiux}
                      alt="uiux illustration"
                      className="w-5/6 h-48 rounded-lg lg:w-full"
                    />
                  </div>
                  <p className="text-white text-center font-semibold mt-2 md:text-lg">
                    UI UX Design Mentors
                  </p>
                </Link>
              </div>

              <div className="my-10">
                <Link to="">
                  <div className="flex justify-center">
                    <img
                      src={cloudcomputing}
                      alt="cloud computing illustration"
                      className="w-5/6 h-48 rounded-lg"
                    />
                  </div>
                  <p className="text-white text-center font-semibold mt-2 md:text-lg">
                    Cloud Computing Mentors
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-purple-900 to-black py-10">
        <div className="bg-white mx-8 rounded-lg p-6 md:flex md:justify-center">
          <div className="lg:flex lg:gap-6">
            <div className="flex gap-4 my-6">
              <div>
                <i class="fa-solid fa-magnifying-glass mt-5 text-2xl text-blue-600"></i>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Free Trial</h1>
                <p className="md:text-lg">
                  Get the first 7 days free,with every mentor
                </p>
              </div>
            </div>

            <div className="flex gap-4 my-6">
              <div>
                <i class="fa-solid fa-ban mt-5 text-2xl text-red-600"></i>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">No Strings</h1>
                <p className="md:text-lg">
                  Cancelling is simple and can be done anytime
                </p>
              </div>
            </div>

            <div className="flex gap-4 my-6">
              <div>
                <i class="fa-solid fa-star mt-5 text-2xl text-amber-500"></i>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Fully vetted</h1>
                <p className="md:text-lg">
                  We demand the highest quality service from our mentors
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center  my-6">
          <div>
            <button className="bg-black font-semibold hover:bg-indigo-600 text-white p-2 rounded mb-2">
              <Link to="/login">Find my mentor</Link>
            </button>

            <p className="underline text-white hover:text-indigo-200">
              <Link to="/signupmentor">Become a mentor</Link>
            </p>
          </div>
        </div>

        <div className="mx-8 py-4 md:mx-20 lg:mx-72">
          <h1 className="text-2xl text-white font-semibold my-4 md:text-3xl lg:text-center">
            Not sure if mentorship is right for you? Give it a try with a
            one-off session.
          </h1>

          <p className="text-white md:text-lg lg:text-center">
            A quick, easy call with an expert is just one click away with our
            attractive one-off sessions. Picking a brain, talking through an
            issue or getting to know an industry expert has never been easier.
          </p>
        </div>

        <div className="lg:flex lg:justify-center">
          <div className="bg-white m-8 rounded-lg p-6">
            <h1 className="text-indigo-800 text-2xl font-semibold my-4">
              Introductory Call<i class="fa-solid fa-phone ml-2"></i>
            </h1>

            <p className="md:text-lg">
              If you're looking for a mentor, and you're just not sure about how
              this all works - this should be for you. In a casual, informal
              introductory call, a mentor will introduce themselves to you.
            </p>
            <p className="font-semibold text-lg my-4">Approx. 30mins</p>
          </div>

          <div className="bg-white m-8 rounded-lg p-6">
            <h1 className="text-indigo-800 text-2xl font-semibold my-4">
              Study Plan<i class="fa-solid fa-graduation-cap ml-2"></i>
            </h1>

            <p className="md:text-lg">
              Looking to learn a new skill? The vast amount of resources on any
              topic on the internet can feel overwhelming at times. A mentor can
              give you be for you an overview of the topic.
            </p>
            <p className="font-semibold text-lg my-4">Approx. 45mins</p>
          </div>

          <div className="bg-white m-8 rounded-lg p-6">
            <h1 className="text-indigo-800 text-2xl font-semibold my-4">
              Interview Preparation
              <i class="fa-solid fa-clipboard-question ml-2"></i>
            </h1>

            <p className="md:text-lg">
              Some big interviews coming up? In this 1-hour session, a mentor
              with hiring experience will act as a technical interviewer and ask
              you some standard hiring questions.
            </p>
            <p className="font-semibold text-lg my-4">Approx. 60mins</p>
          </div>
        </div>

        <div className="md:flex">
          <div>
            <div className="mx-8 py-4">
              <h1 className="text-2xl text-white font-semibold my-4 md:text-3xl lg:text-center">
                Still not convinced? Don't just take our word for it
              </h1>
              <p className="text-white md:text-lg lg:text-center">
                We've already delivered 1-on-1 mentorship to thousands of
                students and professionals. See what others have to say
              </p>
              <button className="mx-28 md:mx-0 border border-indigo-300 font-semibold hover:bg-indigo-700 text-white p-2 rounded mt-4">
                <Link to="/login">Find a mentor</Link>
              </button>
            </div>
          </div>

          <div>
            <div className="bg-white m-8 rounded-lg p-6">
              <div className="flex gap-4 my-2">
                <div>
                  <img
                    src={mentee1}
                    alt="mentee profile"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">Jessica</p>
                  <p className="text-sm">Software Engineering Mentee</p>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  incidunt voluptates! Consequuntur exercitationem similique
                  expedita veniam incidunt cum molestias error tempore laborum
                  beatae eum, minus sapiente quasi quam adipisci atque!
                </p>
              </div>
            </div>

            <div className="bg-white m-8 rounded-lg p-6">
              <div className="flex gap-4 my-2">
                <div>
                  <img
                    src={mentee2}
                    alt="mentee profile"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">Jessica</p>
                  <p className="text-sm">Software Engineering Mentee</p>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  incidunt voluptates! Consequuntur exercitationem similique
                  expedita veniam incidunt cum molestias error tempore laborum
                  beatae eum, minus sapiente quasi quam adipisci atque!
                </p>
              </div>
            </div>

            <div className="bg-white m-8 rounded-lg p-6">
              <div className="flex gap-4 my-2">
                <div>
                  <img
                    src={mentee3}
                    alt="mentee profile"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">Jessica</p>
                  <p className="text-sm">Software Engineering Mentee</p>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  incidunt voluptates! Consequuntur exercitationem similique
                  expedita veniam incidunt cum molestias error tempore laborum
                  beatae eum, minus sapiente quasi quam adipisci atque!
                </p>
              </div>
            </div>

            <div className="bg-white m-8 rounded-lg p-6">
              <div className="flex gap-4 my-2">
                <div>
                  <img
                    src={mentee4}
                    alt="mentee profile"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">Jessica</p>
                  <p className="text-sm">Software Engineering Mentee</p>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  incidunt voluptates! Consequuntur exercitationem similique
                  expedita veniam incidunt cum molestias error tempore laborum
                  beatae eum, minus sapiente quasi quam adipisci atque!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
