import React from 'react';

import MentorDashboardNavbar from "../../components/navbar/mentornavbar.jsx";
import MentorDashboardSidebar from "../../components/sidebar/mentorsidebar.jsx";

export default function MentorDashboard() {

    const mentor = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        expertise: 'Web Development',
        students: [
          { id: 1, name: 'Alice', progress: 80 },
          { id: 2, name: 'Bob', progress: 65 },
          { id: 3, name: 'Charlie', progress: 90 },
        ],
        upcomingSessions: [
          { id: 1, student: 'Alice', date: '2024-05-05', time: '10:00 AM' },
          { id: 2, student: 'Bob', date: '2024-05-06', time: '11:00 AM' },
          { id: 3, student: 'Charlie', date: '2024-05-07', time: '09:00 AM' },
        ],
      };
      
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