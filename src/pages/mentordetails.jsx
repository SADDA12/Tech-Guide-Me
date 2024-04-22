import { Link } from "react-router-dom";

import MenteeDashboardNavbar from "../components/navbar/menteenavbar.jsx";
import MenteeDashboardFooter from "../components/footer/menteefooter.jsx";

import mentor1 from "../assets/m1.png"

export default function MentorDetails() {
  return (
    <>
      <MenteeDashboardNavbar />

      <section>
        <div className="bg-gray-100 pt-20 pl-4">
          <img src={mentor1} alt="mentor profile" className="w-2/3 border-2 border-white rounded-3xl"/>
        </div>

        <div className="pt-4 pl-4">
          <h1 className="font-semibold text-lg">Micheal Cors <Link><i class="fa-brands fa-linkedin"></i></Link></h1>
          <p>Lead Technical Program Manager @ MasterCard</p>
          <p className="text-red-600">10 years of experience in Tech</p>

          <p className="my-1"><i class="fa-solid fa-location-dot mr-2"></i>Ghana</p>
          <p className="my-1"><i class="fa-solid fa-star mr-2"></i>5.0</p>
        </div>

        <div className="md:hidden mx-8 my-4 p-4 border-2 border-gray-200 rounded-lg">
          <h1 className="text-center font-semibold text-xl">Services</h1>

          <div>
            <h1 className="font-semibold text-xl">$180 <span className="text-sm">/ month</span></h1>
            <p>The most popular way to get mentored, let's work towards your goals!</p>
            <p><i class="fa-solid fa-phone mr-2"></i>2 calls per month</p>
            <p><i class="fa-solid fa-comment-dots mr-2"></i>Unlimited Q&A via chats</p>
            <p><i class="fa-solid fa-briefcase mr-2"></i>Hands-on support</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded my-2">Book Appointment</button>
          </div>
        </div>

        <div className="px-6 my-4">
          <h1 className="text-2xl font-semibold">About</h1>
          <p>Hi, I'm Micheal. I have 10 years of experience. I am a full stack web developer. I love to code. I am passionate about coding.</p>
        </div>

        <div className="px-6 my-4">
          <h1 className="text-2xl font-semibold">Skills</h1>
          <p>HTML | CSS | JavaScript | React | Node.js</p>
        </div>
      </section>
      <MenteeDashboardFooter />
    </>
  );
}
