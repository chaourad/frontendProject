import axios from "axios";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate here

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Make a POST request to the authentication endpoint
      const response = await axios.post("http://localhost:8081/api/v1/auth/authenticate", {
        email,
        password,
      });

      // Assuming the backend sends a JWT token upon successful login
      const token = response.data.access_token;
      // You can store the token in local storage or a cookie for future authenticated requests
      localStorage.setItem("token", token);
      //console.log("ok");
      // Check the user's role in the token payload
      const tokenPayload = jwtDecode(token);
     // console.log("ok2");
      console.log(tokenPayload);

      if (tokenPayload.role.includes("admin:create")) {
        // Redirect to the dashboard for admins
       // console.log("ok3");
        navigate('/dashboard')
      } else {
        // Redirect to the regular user dashboard
       // console.log("ok4");
        navigate('/home'); // Replace with your user dashboard URL
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
      <div className="border-t-8 rounded-sm border-red-600 bg-white p-12 shadow-2xl w-96">
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 sm:w-2/1 px-1">
            <img
              src="https://seeklogo.com/images/E/electroplanet-logo-F9C7863248-seeklogo.com.png"
              alt="..."
              className="shadow-lg rounded max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
        <br />
        <h1 className="font-bold text-center block text-2xl">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="text-red-500">{error}</div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-500 block mt-3">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="me@example.com"
              autoFocus={true}
              value={email}
              onChange={handleEmailChange}
              className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-red-400 focus:outline-none focus:ring focus:ring-indigo-100"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-500 block mt-3">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••••"
              value={password}
              onChange={handlePasswordChange}
              className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-red-400 focus:outline-none focus:ring focus:ring-indigo-100"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-red-600 to-pink-400 hover:from-red-700 hover:to-pink-500 focus:bg-red-900 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
