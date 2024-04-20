import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleicon from "../../assets/googleicon.png";

export default function SignupMentee() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <>
    <section className="flex justify-center">

    <section className="hidden md:block bg-red-600 w-2/5 h-screen">
        <p>gfgfgh</p>
    </section>

    <section className="py-10 px-6 w-11/12 md:w-4/5">
        <div className="my-4">
            <h1 className="text-center font-bold text-2xl">Signup as Mentee</h1>
        </div>

      <div className="flex justify-center items-center h-full">

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-11/12" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center bg-white rounded-md"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              )}
            </button>
            <p className="text-gray-600 text-xs md:text-sm italic">
              Must be at least 8 characters.
            </p>
            <p className="text-gray-600 text-xs md:text-sm italic">
              Must include one lowercase character.
            </p>
            <p className="text-gray-600 text-xs md:text-sm italic">
              Must include one uppercase character.
            </p>
          </div>
          <div>
            <button
              className="bg-red-600 text-white font-bold py-2 px-4 my-1 rounded w-full"
              type="submit"
            >
              Sign Up
            </button>
            </div>
            <div>
            <button
              className="flex justify-center font-bold py-2 px-4 my-3 border rounded w-full"
              type="button"
              onClick={() => {
                // Handle sign-up with Google logic
              }}
            >
                <div>
                    <img src={googleicon} alt="google icon" className="w-6"/>
                    </div>

                    <div>
                    Sign Up with Google
                    </div>
              
            </button>
          </div>
          <div>
        <p className="text-sm md:text-base my-1">Already have an account? <Link to="/login" className="underline text-red-600">Log in</Link></p>

        <p className="text-xs md:text-base">Looking to join us as a mentor? <Link to="/signupmentor" className="underline text-red-600">Apply Now</Link></p>
      </div>
        </form>
        
      </div>

      
      </section>
      </section>
    </>
  );
};
