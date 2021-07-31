import React from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            to="/blog"
            className="text-gray-800 dark:text-gray-200 border-b-2 border-yellow-400 mx-1.5 sm:mx-6"
          >
            home
          </Link>

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
            register
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
