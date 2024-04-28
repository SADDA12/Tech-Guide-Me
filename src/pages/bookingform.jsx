import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenteeDashboardNavbar from '../components/navbar/menteenavbar';
import MenteeDashboardFooter from '../components/footer/menteefooter';

import mentor1 from "../assets/m1.png"

const BookingForm = () => {


  return (
    <>
    <MenteeDashboardNavbar/>
    <section className=''>
        <div className="bg-gray-100 m-6 p-6 lg:mx-32 lg:my-12 rounded">
         <div className='flex justify-center'>
          <img src={mentor1} alt="mentor profile" className="w-2/3 md:w-1/3 border-2 border-white rounded-3xl"/>
         </div>

         <div className='my-4 text-center'>
         <h1 className="font-semibold text-lg md:text-2xl">Micheal Cors <Link><i class="fa-brands fa-linkedin"></i></Link></h1>
          <p className='text-sm md:text-lg'>Lead Technical Program Manager @ MasterCard</p>
          <p className="text-red-600 md:text-xl">10 years of experience in Tech</p>
          <p className='md:text-lg'>HTML | CSS | JavaScript | React | Node.js</p>
         </div>
        </div>


   
        <div className='flex justify-center'>
        <div className="border-2 rounded p-4 my-4 w-10/12">
            <h1 className='font-semibold text-lg text-center mb-2'>Select A Time Slot</h1>

            <div>
                <select>
                    <option>02/04/2024 11:00am - 12:00pm</option>
                    <option>02/04/2024 12:00pm - 01:00pm</option>
                    <option>02/04/2024 01:00pm - 02:00pm</option>
                    <option>02/04/2024 02:00pm - 03:00pm</option>
                    <option>30/04/2024 01:30pm - 02:30pm</option>
                    <option>30/04/2024 02:30pm - 03:30pm</option>
                </select>
                
             </div>

            <div className='mt-4'>
                <button className='bg-indigo-500 hover:bg-indigo-700 text-white rounded p-2'>Book Appointment</button>
            </div>
        </div>
      </div>

    
      </section>

      

    
    <MenteeDashboardFooter/>
    </>
  );
};

export default BookingForm;
