import React, { useState } from "react";
import swal from "sweetalert";
import "../styles/sweet.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Register() {
  //define usehistory
  const history = useHistory();
  //define state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  //six onChange function
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      swal({
        title: "Password does not match",
        text: "",
        icon: "error",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    } else if (!name || !email || !password || !passwordConfirm) {
      swal({
        title: "Please fill all required fields",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      swal({
        title: "Enter valid email address",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    } else {
      swal({
        title: "Registration Successful",
        text: "You can login with the unique ID sent to your email!",
        icon: "success",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    }
    //set all the states to empty string
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setName("");

    //write axios to post the values of register to server
    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }

    // axios
    //   .post("http://localhost:1000/api/register", {
    //     email: email,
    //     password: password,
    //     name: name,
    //     confirmpassword: passwordConfirm,
    //   },config)
    //   .then((response) => {
    //     console.log(response.data);
    //     if (response.data) {
    //       //redirect to login page
    //       history.push("/login");
    //       swal({
    //         title: "Registration Successful",
    //         text: "You can login with the unique ID sent to your email!",
    //         icon: "success",
    //         buttons: {
    //           confirm: { text: "Okay", className: "sweet-warning" },
    //         },
    //       });
    //     } else {
    //       swal({
    //         title: "Registration Failed",
    //         text: response.json,
    //         icon: "error",
    //         buttons: {
    //           confirm: { text: "Okay", className: "sweet-warning" },
    //         },
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     swal({
    //       title: "Registration Failed",
    //       text: "",
    //       icon: "error",
    //       buttons: {
    //         confirm: { text: "Okay", className: "sweet-warning" },
    //       },
    //     });
    //   });
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-center">
      <div className="w-full pt-40 lg:w-1/2">
        <div className="flex flex-col justify-center md:justify-start my-auto py-8 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl font-bold text-gray-600">
            Register Here!
          </p>
          <form className="flex flex-col" onSubmit="event.preventDefault();">
            <div className="flex flex-col pt-4">
              <input
                type="text"
                id="name"
                placeholder="Enter your Full Name*"
                onChange={onChangeName}
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-200 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                required={true}
              />
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="email"
                id="email"
                placeholder="Enter your Email Id*"
                onChange={onChangeEmail}
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-200 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                required={true}
              />
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="password"
                id="password"
                placeholder="Enter your Password*"
                onChange={onChangePassword}
                required={true}
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-200 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <input
                type="password"
                id="cpassword"
                placeholder="Confirm Password*"
                onChange={onChangePasswordConfirm}
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-200 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              value="Log In"
              //   onClick={handleSubmit}
              className="bg-black hover:bg-yellow-400 text-white font-bold rounded-lg text-lg p-2 mt-8"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <img
        className="w-full lg:w-1/2 px-12 pt-12"
        src="http://localhost:3001/assets/images/welcome.svg"
        alt="welcome"
      />
    </div>
  );
}
