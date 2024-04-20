import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing/landingpage.jsx";
import ContactMentor from "./pages/contactmentor";
import LoginPage from "./pages/login/loginpage.jsx";
import MentorDetails from "./pages/mentordetails";
import Mentors from "./pages/mentors/mentorspage.jsx";
import SignupMentee from "./pages/signup/signup-mentee.jsx";
import SignupMentor from "./pages/signup/signup-mentor.jsx";
import MenteeDashboard from "./pages/menteedashboard/menteedashboard.jsx";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/contactmentor", element: <ContactMentor /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/mentordetails", element: <MentorDetails /> },
  { path: "/mentors", element: <Mentors /> },
  { path: "/signupmentee", element: <SignupMentee /> },
  { path: "/signupmentor", element: <SignupMentor /> },
  { path: "/menteedashboard", element: <MenteeDashboard /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
