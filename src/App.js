import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import ContactMentor from "./pages/contactmentor";
import LoginPage from "./pages/loginpage";
import MentorDetails from "./pages/mentordetails";
import Mentors from "./pages/mentorspage";
import SignupPage from "./pages/signuppage";


const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/contactmentor", element: <ContactMentor /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/mentordetails", element: <MentorDetails /> },
  { path: "/mentors", element: <Mentors /> },
  { path: "/signup", element: <SignupPage /> },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
