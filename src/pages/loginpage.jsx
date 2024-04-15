import React from "react";
import { Link } from "react-router-dom";
import googleicon from "../assets/googleicon.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function LoginPage() {
  const handleLogin = () => {
    // Handle login logic
  };

  const handleGoogleLogin = () => {
    // Handle login with Google logic
  };

  return (
    <>
      <section className="flex justify-center h-full">

        <div className="hidden md:block bg-red-600 w-2/5">
            <p>ftuuftgftg</p>
        </div>

        <div className="px-6 py-10 w-4/5">
          <div>
            <h1 className="font-bold text-3xl lg:ml-52">Login</h1>
          </div>

          <div className="mt-6 lg:flex lg:justify-center lg:items-center">
            <Tabs className="lg:w-2/4">
            <TabList className="flex justify-between border-b pb-4">
              <Tab className="w-1/2 text-center">I am a mentee</Tab>
              <Tab className="w-1/2 text-center">I am a mentor</Tab>
            </TabList>

            <TabPanel>

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
                    className="bg-red-600 text-white font-bold py-2 px-4 my-3 rounded w-full"
                    type="button"
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                </div>

                <div className="">
                  <p className="text-center">Or</p>
                </div>

                <div>
                  <button
                    className="flex justify-center font-bold py-2 px-4 my-3 border rounded w-full"
                    type="button"
                    onClick={handleGoogleLogin}
                  >
                    <div>
                    <img src={googleicon} alt="google icon" className="w-6"/>
                    </div>
                    
                    <div>
                    Log In with Google

                    </div>
        
                  </button>
                </div>
              </form>
            </div>

            <p className="underline my-4">Forgot password?</p>

            <p className="">Don't have an account?</p>

            <p className="text-sm"><Link to="/signupmentee" className="underline text-red-600">Signup as a mentee</Link> or <Link to="/signupmentor" className="underline text-red-600">apply to be a mentor</Link> </p>
            </TabPanel>


            <TabPanel>
      
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
                    className="bg-red-600 text-white font-bold py-2 px-4 my-3 rounded w-full"
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

            <p className="text-sm"><Link to="/signupmentee" className="underline text-red-600">Signup as a mentee</Link> or <Link to="/signupmentor" className="underline text-red-600">apply to be a mentor</Link> </p>
    </TabPanel>
            </Tabs>
          </div>
        </div>

      </section>

    </>
  );
}
