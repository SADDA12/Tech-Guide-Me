import MentorDashboardNavbar from "../../components/navbar/mentornavbar.jsx";
import MentorDashboardSidebar from "../../components/sidebar/mentorsidebar.jsx";

export default function MyMenteesPage() {
    return(
        <>
            <MentorDashboardNavbar/>

            <section className="flex">

            <MentorDashboardSidebar/>

            <section>
                <p>my mentees</p>
            </section>
            </section>
        </>
    )
}