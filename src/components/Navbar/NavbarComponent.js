import React from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log(user);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 border-b-2 border-yellow-400 mx-1.5 sm:mx-6"
          >
            home
          </Link>
          {user ? (
            <div>
              <Link
                to="/create"
                className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-yellow-400 mx-1.5 sm:mx-6"
              >
                Update/Create
              </Link>

              <button
                onClick={handleLogout}
                className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-yellow-400 mx-1.5 sm:mx-6"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-yellow-400 mx-1.5 sm:mx-6"
              >
                Signin
              </Link>

              <Link
                to="/register"
                className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-yellow-400 mx-1.5 sm:mx-6"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
