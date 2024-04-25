import React, { useState } from "react";

export default function MentorSignupEmploymentInfo() {
    
    const [formData, setFormData] = useState({
        currentEmployer: '',
        employerWebsite: '',
        jobTitle: '',
        location: '',
        skills: '',
        reason: '',
      });
    
      
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
      };

    return(
        <>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <p className="mb-2 font-semibold text-indigo-600">Employment Information</p>
                               <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Current job title
                                    </label>
                                    <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="jobTitle"
                                    type="text"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleInputChange}
                                    required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Location
                                    </label>
                                    <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="location"
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Sector
                                    </label>
                                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pronouns">
                                        <option>Please select</option>
                                        <option>Web Development & Web Design</option>
                                        <option>Software Development</option>
                                        <option>Data Science & Data Analytics</option>
                                        <option>Cloud Computing</option>
                                        <option>Cyber Security</option>
                                        <option>Digital Marketing</option>
                                        <option>Ai & Machine Learning</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Career Stage
                                    </label>
                                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pronouns">
                                        <option>Please select</option>
                                        <option>Junior: 2-3 years' experience</option>
                                        <option>Mid: 3-8 years' experience</option>
                                        <option>Senior: 8+ years' experience</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    List your skills
                                    </label>
                                    <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="skills"
                                    type="text"
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleInputChange}
                                    required
                                    />
                                </div>
                                
                                </form>  
        </>
    )
}