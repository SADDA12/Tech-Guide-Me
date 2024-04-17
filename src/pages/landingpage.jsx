import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

import ceo from "../assets/ceo.png";
import webdev from "../assets/webdev.jpg";
import data from "../assets/datascience.jpg";
import uiux from "../assets/uiux.jpg";
import cloudcomputing from "../assets/cloudcomputing.jpg";

export default function LandingPage() {
    return(
        <>
        <Navbar/>


        <section id="hero-section" className="flex">
        <section className="py-4 lg:py-12 md:w-9/12 lg:w-3/5">
            <div className="mx-4 my-6">
                <p className="text-sm md:text-base">Learn a new skill, launch a project, land your dream career</p>
            </div>

            <div className="mx-4 my-6">
                <p className="text-3xl font-semibold">1-on-1</p>
                <p className="text-red-600">Topic changes</p>
                <p className="text-3xl font-semibold">Mentorship</p>
            </div>

            <div className="mx-4">
            <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                <Link
                to="/mentors"
                className="text-base"
            >
              Find Mentors
            </Link>
            </button>

            <div className="mt-2 flex gap-1 text-xs md:text-sm">
                <button className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full md:px-2">Web Developers</button>

                <button className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full md:px-2">Software Engineers</button>

                <button className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full md:px-2">UI/UX Designers</button>

                <button className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full md:px-2">Data Scientists</button>
            </div>
            </div>
        </section>

        <section className="hidden md:block bg-red-100 w-3/12 lg:w-2/5">
            <h1>Mentor Carousel will go here</h1>
        </section>
        </section>


        <section id="ceo-section" className="md:p-16">
        <div>
            <div className="bg-gray-100 py-10 rounded-lg lg:flex lg:py-16">
                <div id="CEOPROFILE" className="lg:w-2/5">
                <div className="flex justify-center">
                    <div className="bg-white rounded p-2 lg:p-4">
                    <div className="flex justify-between">
                        <div className="mt-8">
                            <p className="font-semibold lg:text-xl">James Morgan</p>
                            <p className="text-sm lg:text-base">CEO</p>
                        </div>
                        <div><img src={ceo} alt="ceo profile" className="w-24 h-18 lg:w-32" /></div>
                    </div>

                    <div className="bg-gray-100 my-1 rounded pl-1 text-sm lg:text-base lg:my-2">Intro Session</div>

                    <div className="bg-gray-100  rounded pl-1 text-sm lg:text-base">Cv Review</div>

                    <div className="bg-gray-100 my-1 rounded pl-1 text-sm lg:text-base lg:my-2">Expert Session</div>
                    
                    </div>
                    
                </div>
                </div>

                <div id="YTVTYVFTG" className="lg:w-3/5">

                <div className="">
                    <div className="m-6">
                      <h1 className="text-xl font-semibold text-red-600 lg:text-2xl">At your fingertips: a dedicated tech career coach</h1>

                      <p className="lg:text-lg">Want to start a new dream career in tech? Successfully build your tech startup? Itching to learn high-demand skills? Work smaort with an online mentor by your side to offer expert advice and guidance to match your zeal. Cecome unstoppable using "app name"</p>
                    </div>
                    
                </div>

                <div className="mx-6">
                    <div className="md:flex md:gap-24">
                    <div>
                    <p className="my-1"><i class="fa-solid fa-circle-check mr-2"></i>Thousands of mentors available</p>

                    <p className="my-1"><i class="fa-solid fa-circle-check mr-2"></i>Flexible program structures</p>

                    <p className="my-1"><i class="fa-solid fa-circle-check mr-2"></i>Personal chats</p>
                    </div>

                    <div>
                    <p className="my-1"><i class="fa-solid fa-circle-check mr-2"></i>1-on-1 calls</p>

                    <p className="my-1"><i class="fa-solid fa-circle-check mr-2"></i>98% satisfaction rate</p>
                    </div>
                    </div>

                    <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded my-2"><Link to="/mentors">Find a mentor</Link><i class="fa-solid fa-arrow-right ml-2"></i></button>
                </div>
                </div>
            </div>

        </div>
        </section>


        <section id="explore-mentors-section" className="px-6 py-10">
            <div className="my-4">
                <p className="text-center text-xl font-semibold md:text-2xl">Explore 100+ Available mentors</p>
            </div>

            <div>
                <div className="md:flex lg:gap-8">
                    <div className="lg:flex">
                <div className="my-10">
                    <Link to="">
                    <div className="flex justify-center">
                    <img src={webdev} alt="web development illustration" className="w-5/6 h-48 rounded-lg" />
                    </div>
                    <p className="text-center font-semibold mt-2 md:text-lg">Web Development Mentors</p>
                    </Link>
                </div>

                <div className="my-10">
                    <Link to="">
                    <div className="flex justify-center">
                    <img src={data} alt="data science illustration" className="w-5/6 h-48 rounded-lg lg:w-full"/>
                    </div>
                    <p className="text-center font-semibold mt-2 md:text-lg">Data Science Mentors </p>
                    </Link>
                </div>
                    </div>

                    <div className="lg:flex ">
                <div className="my-10">
                    <Link to="">
                    <div className="flex justify-center">  
                    <img src={uiux} alt="uiux illustration" className="w-5/6 h-48 rounded-lg lg:w-full"/>
                    </div>
                    <p className="text-center font-semibold mt-2 md:text-lg">UI UX Design Mentors</p>
                    </Link>
                </div>

                <div className="my-10">
                    <Link to="">
                    <div className="flex justify-center">
                    <img src={cloudcomputing} alt="cloud computing illustration" className="w-5/6 h-48 rounded-lg"/>
                    </div>
                    <p className="text-center font-semibold mt-2 md:text-lg">Cloud Computing Mentors</p>
                    </Link>
                </div>
                   </div>
                </div>
            </div>
        </section>

        <Footer/>
        </>
    )
};