import React from 'react';

import MentorDashboardNavbar from "../../components/navbar/mentornavbar.jsx";
import MentorDashboardSidebar from "../../components/sidebar/mentorsidebar.jsx";

export default function MyMenteesPage() {

    const mentees = [
        {
          id: 1,
          name: 'Alice Smith',
          email: 'alice@example.com',
          avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 2,
          name: 'Bob Johnson',
          email: 'bob@example.com',
          avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
          bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 3,
          name: 'Eva Martinez',
          email: 'eva@example.com',
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ];

    return(
        <>
            <MentorDashboardNavbar/>

            <section className="flex">

            <MentorDashboardSidebar/>

            <section>
                <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">My Mentees</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mentees.map((mentee) => (
          <div key={mentee.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={mentee.avatar} alt={mentee.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{mentee.name}</h2>
              <p className="text-gray-600 mb-2">{mentee.email}</p>
              <p className="text-gray-700">{mentee.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
            </section>
            </section>
        </>
    )
}