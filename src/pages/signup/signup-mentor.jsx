import React from "react";
import { Link } from "react-router-dom";

import MentorSignupContactInfo from "../../components/signup/mentorsignupcontactinfo.jsx";
import MentorSignupEmploymentInfo from "../../components/signup/mentorsignupemploymentinfo.jsx";

import whitehorizontal from "../../assets/white-horizontal.png";

export default function SignupMentor() {

    return(
        <>
            <section className="bg-gradient-to-b from-purple-900 to-black flex justify-center py-10 px-6">

                <div className="">

                <div className="flex justify-center my-4">
                    <img src={whitehorizontal} alt="logo" className="w-40 h-12 md:w-60 md:h-20 lg:w-72 lg:h-24"/>
                </div>

                <div className="flex justify-center my-6">
                    <p className="text-white md:text-lg">
                        Thank you for signing up to be a mentor at Tech Guide Me. We'll provide you with guidelines, a mentoring agreement and will support throughout the process. Please fill in this form with as much information as you can, so we can make the best possible match.
                    </p>
                </div>

                <div>
                    
                    <div className="md:px-20 md:my-10 lg:px-60">
                        <MentorSignupContactInfo/>
                     </div>

                     <div className="md:px-20 md:my-10 lg:px-60">
                        <MentorSignupEmploymentInfo/>
                     </div>

                     <div>
                        <p className="md:text-lg">
                            By clicking on "Submit" you agree to our Terms of Service and Privacy Policy.
                        </p>

                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <Link to="/mentordashboard">Submit</Link>
                        </button>
                     </div>
                </div>

                </div>

            </section>
        </>
    )
};