import { Link } from "react-router-dom";

export default function MentorDashboardSidebar() {
    return(
        <>
        <section className="hidden md:hidden lg:block bg-gray-200 w-1/5 border border-red-800 h-screen py-10 px-4">
        
                <Link
                  to="/mentordashboard"
                  className="block text-lg hover:text-red-600 mb-4"
                >
                  <i class="fa-solid fa-house mr-2"></i>
                  Home
                </Link>
                <Link
                  to="/mentormessages"
                  className="block text-lg hover:text-red-600 mb-4"
                >
                  <i class="fa-solid fa-message mr-2"></i>
                  Messages
                </Link>
                <Link
                  to="/mymentees"
                  className="block text-lg hover:text-red-600 mb-4"
                >
                  <i class="fa-solid fa-user-graduate mr-2"></i>
                  My Mentees
                </Link>
                <Link
                  to=""
                  className="block text-lg hover:text-red-600 mb-4"
                >
                  <i class="fa-solid fa-clock mr-2"></i>
                  Bookings
                </Link>
                <Link
                  to=""
                  className="block text-lg hover:text-red-600 mb-4"
                >
                  <i class="fa-solid fa-gear mr-2"></i>
                  Settings
                </Link>
                <Link
                  to="/login"
                  className="block text-lg hover:text-red-600 mb-4"
                >
                  <i class="fa-solid fa-lock mr-2"></i>
                  Logout
                </Link>
              
        </section>
        </>
    )
};