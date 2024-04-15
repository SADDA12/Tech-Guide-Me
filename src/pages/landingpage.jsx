import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return(
        <>
        <Navbar/>

        <section>
            <div className="mx-4 my-6">
                <p className="text-sm">Learn a new skill, launch a project, land your dream career</p>
            </div>

            <div className="mx-4 my-6">
                <p className="text-3xl font-semibold">1-on-1</p>
                <p className="text-red-600">Topic changes</p>
                <p className="text-3xl font-semibold">Mentorship</p>
            </div>

            <div className="flex justify-center">
            <button className="bg-red-600 font-semibold hover:bg-red-700 text-white p-2 rounded">
                <Link
                to="/mentors"
                className="text-base"
            >
              Find Mentors
            </Link>
            </button>
            </div>

            
        </section>
        

        <Footer/>
        </>
    )
};