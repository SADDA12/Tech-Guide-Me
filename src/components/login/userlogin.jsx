import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import googleicon from "../../assets/googleicon.png";
export default function UserLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigateToMenteeDashboard = () => {
    navigate("/menteedashboard");
  };

  const navigateToMentorDashboard = () => {
    navigate("/mentordashboard");
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      toast.error("Please Complete the form", { position: "top-center" });
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", formData, {});
      if (response.status === 200) {
        toast.success("Mentee succesfully logged in.", {
          position: "top-right",
        });
        localStorage.setItem("userData", JSON.stringify(response.data));
        response.data.role === "mentee"
          ? navigateToMenteeDashboard()
          : navigateToMentorDashboard();
      }
      setLoading(false);
    } catch (error) {
      toast.error("Invalid Credentials", { position: "top-right" });
    }
  };

  const handleGoogleLogin = () => {
    // Handle login with Google logic
  };

  return (
    <>
      <div>
        <Toaster />
        <form>
          <div className="my-2">
            <label className="block my-1" htmlFor="email">
              Username or Email
            </label>
            <input
              className="w-full border rounded p-1"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
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
              name="password"
              value={formData.password}
              onChange={handleInputChange}
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
              {loading ? "Loading..." : "Log In"}
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
                <img src={googleicon} alt="google icon" className="w-6" />
              </div>

              <div>Log In with Google</div>
            </button>
          </div>
        </form>
      </div>

      <p className="underline my-4">Forgot password?</p>

      <p className="">Don't have an account?</p>

      <p className="text-sm">
        <Link
          to="/signupmentee"
          className="underline text-indigo-500 hover:text-indigo-300"
        >
          Signup as a mentee
        </Link>{" "}
        or{" "}
        <Link
          to="/signupmentor"
          className="underline text-indigo-500 hover:text-indigo-300"
        >
          apply to be a mentor
        </Link>{" "}
      </p>
    </>
  );
}
