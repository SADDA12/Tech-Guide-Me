import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenteeDashboardNavbar from '../components/navbar/menteenavbar';
import MenteeDashboardFooter from '../components/footer/menteefooter';

import mentor1 from "../assets/m1.png";
import mentor2 from "../assets/m2.png";

const BookingForm = () => {

    const [showDialog, setShowDialog] = useState(false);

    const handleBookAppointment = () => {
      setShowDialog(true);
    };


  return (
    <>
    <MenteeDashboardNavbar/>
    <section className=''>
        <div className="bg-gray-100 m-6 p-6 lg:mx-32 lg:my-12 rounded">
         <div className='flex justify-center'>
          <img src={mentor2} alt="mentor profile" className="w-2/3 md:w-1/3 border-2 border-white rounded-3xl"/>
         </div>

         <div className='my-4 text-center'>
         <h1 className="font-semibold text-lg md:text-2xl">George Hernandez<Link><i class="fa-brands fa-linkedin mx-2"></i></Link></h1>
          <p className='text-sm md:text-lg'>Senior Web Developer @ Yelp</p>
          <p className="text-red-600 md:text-xl">10 years of experience</p>
          <p className='md:text-lg'>Frontend | Backend | Git | Version Control</p>
         </div>
        </div>


   
        <div className='flex justify-center'>
        <div className="border-2 rounded p-4 my-4 w-10/12 lg:w-6/12">
            <h1 className='font-semibold text-lg text-center mb-2'>Select A Time Slot</h1>

            <div>
                <select className='border w-full'>
                    <option>02/04/2024 11:00am - 12:00pm</option>
                    <option>02/04/2024 12:00pm - 01:00pm</option>
                    <option>02/04/2024 01:00pm - 02:00pm</option>
                    <option>02/04/2024 02:00pm - 03:00pm</option>
                    <option>30/04/2024 01:30pm - 02:30pm</option>
                    <option>30/04/2024 02:30pm - 03:30pm</option>
                </select>
                
             </div>

            <div className='mt-4'>
                <button className='bg-indigo-500 hover:bg-indigo-700 text-white rounded p-2' onClick={handleBookAppointment}>Book Appointment</button>
            </div>
            {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-lg font-semibold text-center">Booking Successful<i class="fa-solid fa-circle-check mx-1 text-green-600"></i></p>
            <button 
              className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white rounded p-2"
              onClick={() => setShowDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
        </div>
      </div>

    
      </section>

      

    
    <MenteeDashboardFooter/>
    </>
  );
};

export default BookingForm;
