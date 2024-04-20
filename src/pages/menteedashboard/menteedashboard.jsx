import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import MenteeDashboardNavbar from "../../components/navbar/menteenavbar.jsx";
import MenteeDashboardFooter from "../../components/footer/menteefooter.jsx";

export default function MenteeDashboard() {
    return(
        <>
        <MenteeDashboardNavbar/>

        <section className="bg-red-800">
            <div className="py-10 px-4 lg:py-20">
            <div className="text-center">
                <h1 className="text-white text-3xl font-bold my-2 md:text-4xl">Welcome, Sam!</h1>
                <p className="text-white my-4 md:text-lg">Start connecting with mentors and get ready to take your career to the next level!</p>
                <button className="bg-white hover:bg-gray-100 hover:text-red-600 px-4 py-2 rounded md:text-lg"><Link to="/mentors">Browse mentors</Link></button>
            </div>
            </div>
        </section>
        <div className="bg-gray-200 p-2 lg:p-4">
            <p className="text-center font-semibold lg:text-xl"><i class="fa-solid fa-eye fa-beat mr-2"></i>Want to double the chance of success for your applications? Specify your tech field</p>
        </div>

        <section className="py-10 px-4 md:py-14 lg:px-10 lg:py-20">
            <h1 className="font-bold mb-2 md:text-2xl">Recommended For You</h1>

            <div>
            <Swiper
            direction={"horizontal"}
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
            className="w-full h-40"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
            </div>
        </section>

        <section className="py-6 px-4 lg:px-20">
            <h1 className="text-center font-semibold mb-2 lg:text-4xl">Featured Sessions</h1>
            
            <div className="md:flex md:justify-center md:gap-6">
                <div className="my-2 bg-gray-50 border rounded p-4 md:w-1/3">
                    <h4 className="font-bold">Intro Call</h4>
                    <p>If you're looking for a mentor, and you're just not sure about how this all works - this should be for you</p>
                    <h4 className="font-semibold">Approx. 30 minutes | <span className="text-red-600">$0</span></h4>
                </div>

                <div className="my-2 bg-gray-50 border rounded p-4 md:w-1/3">
                    <h4 className="font-bold">Work Review</h4>
                    <p>In this session, a mentor will sit down with you, and give you some inputs to make your work better, be it review, inputs on your design, or some inspiration.</p>
                    <h4 className="font-semibold">Approx. 45 minutes | <span className="text-red-600">$39</span></h4>
                </div>

                <div className="my-2 bg-gray-50 border rounded p-4 md:w-1/3">
                    <h4 className="font-bold">Interview Preparation</h4>
                    <p>Some big interviews coming up? In this ! hour session, a mentor with hiring experience will act as a technical interviewer and ask you some standard hiring questions.</p>
                    <h4 className="font-semibold">Approx. 60 minutes | <span className="text-red-600">$89</span></h4>
                </div>
            </div>
        </section>

        <section className="py-6 px-4 md:px-12 lg:px-20">
            <h1 className="font-semibold text-center lg:text-2xl">Frequently Asked Questions</h1>

        <div className="md:flex md:justify-center md:gap-10">
            <div className="md:w-1/2">
            <div className="my-4">
                <h4 className="font-semibold lg:text-xl bg-red-50">How can i get in touch with a mentor?</h4>
                <p>We offer two main ways to get in touch with a mentor, the regular long-term mentorship through application, and by booking a session</p>
            </div>

            <div className="my-4">
                <h4 className="font-semibold lg:text-xl bg-red-50">How much do mentors cost? How does pricing work?</h4>
                <p>Each mentor offers multiple pricing tiers and has different offers. With the mentorship subscription, you'll get charged the monthly fee of the mentor you're subscribed to. If you book a session, you'll be charged the price of the session once.</p>
            </div>
            </div>

            <div className="md:w-1/2">
            <div className="my-4">
                <h4 className="font-semibold lg:text-xl bg-red-50">What can I expect from mentors?</h4>
                <p>Mentors are vetted and continuously evaluated based on their performances, with the goal to only have the best mentors available to you. Their goal is to get you closer to your goal with the services booked in your plan.
                 However, mentors are professionals in the industry, offering their free time to help you reach your goals. You'll typically receive replies within a few hours and will have pre-scheduled meetings with your mentor, they cannot be available to you 24/7.</p>
            </div>
            </div>

        </div>

        </section>
        <MenteeDashboardFooter/>
        </>
    )
}