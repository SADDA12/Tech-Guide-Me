import { Link } from "react-router-dom";

import whitelogo from "../../assets/white-only.png";

export default function MenteeDashboardFooter() {
    return(
        <>
        <section className="bg-black flex justify-between px-2 py-3 lg:px-20">
            <div>
                <Link to="/menteedashboard">
                <img src={whitelogo} alt="logo" className="w-10 lg:w-24 lg:h-24" />
                </Link>
            </div>

            <div className="pt-6">
                <h1 className="text-white font-bold text-sm md:text-lg">© 2022 TechGuideMe. All rights reserved</h1>
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