import React, { useState } from 'react';

const BookingForm = ({ mentors, onSubmit }) => {
//   const [selectedMentor, setSelectedMentor] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');

//   const handleMentorChange = (e) => {
//     setSelectedMentor(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ mentor: selectedMentor, date: selectedDate });
//   };

  return (
    <form  className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="mentor" className="block text-gray-700 font-bold mb-2">
          Select a mentor:
        </label>
        <select
          id="mentor"
          name="mentor"
         
          
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a mentor</option>
          
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Select a date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
         
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Book
      </button>
    </form>
  );
};

export default BookingForm;
