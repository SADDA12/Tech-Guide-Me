import { Link } from "react-router-dom";

import whitelogo from "../../assets/whitelogo.png";

export default function MenteeDashboardFooter() {
    return(
        <>
        <section className="bg-red-800 flex justify-between px-2 py-3 lg:px-20">
            <div>
                <Link to="/menteedashboard">
                <img src={whitelogo} alt="logo" className="w-20 lg:w-24" />
                </Link>
            </div>

            <div className="pt-6">
                <h1 className="text-white font-bold text-sm md:text-lg">© 2022 TechMentor. All rights reserved</h1>
            </div>

            <div className="pt-6">
                <Link to="/" className="text-white underline md:text-lg">
                    Logout
                </Link>
            </div>
        </section>
        </>
    )
}