import MentorDashboardNavbar from "../../components/navbar/mentornavbar.jsx";
import MentorDashboardSidebar from "../../components/sidebar/mentorsidebar.jsx";

export default function MentorMessages() {
    return(
        <>
            <MentorDashboardNavbar/>

            <section className="flex">

            <MentorDashboardSidebar/>

            <section>
                <p>my messages</p>
            </section>
            </section>
        </>
    )
}