import React from 'react';


import MentorDashboardNavbar from "../../components/navbar/mentornavbar.jsx";
import MentorDashboardSidebar from "../../components/sidebar/mentorsidebar.jsx";

export default function MentorDashboard() {

    const mentorData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'I am a software engineer with 5 years of experience...',
        appointments: [
          {
            id: 1,
            menteeName: 'Alice Smith',
            date: '2024-05-01',
            time: '10:00 AM',
          },
          {
            id: 2,
            menteeName: 'Bob Johnson',
            date: '2024-05-02',
            time: '11:00 AM',
          },
          {
            id: 3,
            menteeName: 'Eva Martinez',
            date: '2024-05-03',
            time: '2:00 PM',
          },
        ],
      };
      
    return(
        <>
        <section>
            <MentorDashboardNavbar/>
            <section className="flex">

            <MentorDashboardSidebar/>

            <section>
                <div className='flex lg:justify-between gap-24 md:gap-96 p-4 border-b mx-2 lg:ml-20'>
                 <div>
                    <h1 className='font-semibold md:text-xl'>Hello, Mentor name</h1>
                    <p className='md:text-lg'>mentor email</p>
                 </div>

                 <div>
                    <p className='md:text-lg'>Verifed mentor<i class="fa-solid fa-circle-check ml-2 text-green-600"></i></p>
                 </div>

                </div>

                <div className='p-4 md:p-8'>
                    <h1 className='font-semibold md:text-xl'>Quick Actions</h1>

                    <div className='flex my-2'>
                        <div className='bg-gray-100 mx-1 md:mx-2 flex md:gap-1 lg:gap-3 lg:p-2 rounded lg:mx-4'>
                            <div><i class="fa-solid fa-user md:text-2xl md:mt-3"></i></div>
                            <div>
                                <p className='font-semibold text-xs md:text-lg'>View my profile</p>
                                <p className='text-xs md:text-lg'>See your public profile</p>
                            </div>
                        </div>

                        <div className='bg-gray-100 mx-1 md:mx-2 flex md:gap-1 lg:gap-3 lg:p-2 rounded lg:mx-4'>
                            <div><i class="fa-solid fa-user-group md:text-2xl md:mt-3"></i></div>
                            <div>
                                <p className='font-semibold text-xs md:text-lg'>Create A Session</p>
                                <p className='text-xs md:text-lg'>Group mentoring session</p>
                            </div>
                        </div>

                        <div className='bg-gray-100 mx-1 md:mx-2 flex md:gap-1 lg:gap-3 lg:p-2 rounded lg:mx-4'>
                            <div><i class="fa-regular fa-clipboard md:text-2xl md:mt-3"></i></div>
                            <div>
                                <p className='font-semibold text-xs md:text-lg '>Send Notes</p>
                                <p className='text-xs md:text-lg'>Send notes to your mentees</p>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="max-w-7xl mx-auto px-4 py-8">


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentorData.appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            <div className="bg-gray-200 p-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">
              <i class="fa-regular fa-clipboard"></i>
                {appointment.menteeName}
              </h2>
              <span className="px-2 py-1 bg-blue-500 text-white rounded-full">
                {appointment.date}
              </span>
            </div>
            <div className="p-4">
              <p className="text-gray-600 flex items-center mb-2">
              <i class="fa-regular fa-clipboard"></i>
                {appointment.date}
              </p>
              <p className="text-gray-600 flex items-center">
              <i class="fa-regular fa-clipboard"></i>
                {appointment.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>




            </section>
            </section>
        </section>
        </>
    )
}