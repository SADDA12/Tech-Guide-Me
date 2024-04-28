import React from 'react';

import MentorDashboardNavbar from "../../components/navbar/mentornavbar.jsx";
import MentorDashboardSidebar from "../../components/sidebar/mentorsidebar.jsx";

export default function MentorMessages() {

    const messages = [
        {
          id: 1,
          sender: 'Alice Smith',
          subject: 'Meeting Schedule',
          message: 'Hi John, can we schedule a meeting for next week?',
          date: '2024-05-01',
        },
        {
          id: 2,
          sender: 'Bob Johnson',
          subject: 'Project Update',
          message: 'Hi John, here is the latest update on the project.',
          date: '2024-05-02',
        },
        {
          id: 3,
          sender: 'Eva Martinez',
          subject: 'Feedback Request',
          message: 'Hi John, could you please provide feedback on the latest design?',
          date: '2024-05-03',
        },
      ];

    return(
        <>
            <MentorDashboardNavbar/>

            <section className="flex">

            <MentorDashboardSidebar/>

            <section>
            <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Messages</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              <a
                href="#"
                className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm leading-5 font-medium text-indigo-600 truncate">
                      {message.sender}
                    </p>
                    <p className="text-sm leading-5 text-gray-500">{message.date}</p>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="truncate">
                      <p className="text-sm leading-5 text-gray-900">{message.subject}</p>
                      <p className="mt-1 text-sm leading-5 text-gray-500 truncate">
                        {message.message}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
            </section>
            </section>
        </>
    )
}