import { Link } from "react-router-dom";

export default function MentorLogin() {

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
        </>
    )
}