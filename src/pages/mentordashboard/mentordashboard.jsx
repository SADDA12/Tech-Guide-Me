import MentorDashboardNavbar from "../../components/navbar/mentornavbar.jsx";
import MentorDashboardSidebar from "../../components/sidebar/mentorsidebar.jsx";

export default function MentorDashboard() {
    return(
        <>
        <section>
            <MentorDashboardNavbar/>
            <section className="flex">

            <MentorDashboardSidebar/>

            <section>
                <p>Mentor dashboard goes here</p>
            </section>
            </section>
        </section>
        </>
    )
}