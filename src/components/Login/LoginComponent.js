import React, { useState } from "react";
import axios from "axios";
import "../styles/sweet.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit=(e)=>{
    e.preventDefault();
      axios
        .post("https://myways-backend.herokuapp.com/api/signin", {
          email: email,
          password: password,
        })
        .then((response) => {
          // console.log(response.data);
          if (response.data) {
            //redirect to login page
            localStorage.setItem("userData", JSON.stringify(response.data));
            window.location.href="/";
          }
        });
        
    }
  return (
    <div className="flex items-center justify-center pt-20 pb-60">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Blog Login
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              v-model="form.email"
              type="email"
              required
              autoFocus
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-model="form.password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              name="password"
              required
              autoComplete="current-password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 rounded text-white inline-block shadow-lg bg-gray-600 hover:bg-gray-700 focus:bg-gray-700"
              type="submit"
              onClick={HandleSubmit}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
