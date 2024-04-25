import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import MenteeLogin from "../../components/login/menteelogin.jsx";
import MentorLogin from "../../components/login/mentorlogin.jsx";

import whitelogo from "../../assets/white-vertical.png";
export default function LoginPage() {

  return (
    <>
      <section className="flex justify-center h-full">

        <div className="hidden md:block bg-gradient-to-b from-purple-900 to-black w-2/5 md:flex md:justify-center md:items-center">
            <div>
              <img src={whitelogo} alt="logo" className="w-52 h-32 lg:w-80 lg:h-44" />
            </div>
        </div>

        <div className="px-6 py-10 w-4/5">
          <div>
            <h1 className="font-bold text-3xl lg:ml-52">Login</h1>
          </div>

          <div className="mt-6 lg:flex lg:justify-center lg:items-center">
            <Tabs className="lg:w-2/4">
            <TabList className="flex justify-between border-b pb-4">
              <Tab className="w-1/2 text-center"><button className="hover:text-indigo-300 hover:underline">I am a mentee</button></Tab>
              <Tab className="w-1/2 text-center"><button className="hover:text-indigo-300 hover:underline">I am a mentor</button></Tab>
            </TabList>

            <TabPanel>
              <MenteeLogin/>
            </TabPanel>


            <TabPanel> 
              <MentorLogin/>   
            </TabPanel>
            </Tabs>
          </div>
        </div>

      </section>

    </>
  );
}
