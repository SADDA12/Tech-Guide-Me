import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


export default function MentorLogin() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;




    const handleLogin = () => {
        // Handle login logic
      };

    return(
        <>
        <div>
              <form>
                <div className="my-2">
                  <label className="block my-1" htmlFor="usernameOrEmail">
                    Username or Email
                  </label>
                  <input
                    className="w-full border rounded p-1"
                    id="usernameOrEmail"
                    type="text"
                  />
                </div>

                <div className="my-2">
                  <label className="block my-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="border rounded w-full p-1"
                    id="password"
                    type="password"
                    placeholder="*********"
                  />
                </div>

                <div>
                  <button
                    className="bg-violet-600 text-white font-bold py-2 px-4 my-3 rounded w-full"
                    type="button"
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                </div>


              </form>
            </div>

            <p className="underline my-4">Forgot password?</p>

            <p className="">Don't have an account?</p>

            <p className="text-sm"><Link to="/signupmentee" className="underline text-indigo-500 hover:text-indigo-300">Signup as a mentee</Link> or <Link to="/signupmentor" className="underline text-indigo-500 hover:text-indigo-300">apply to be a mentor</Link> </p>
        </>
    )
}