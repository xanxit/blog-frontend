import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function BlogEditor() {
  //onchange function for title, image, content
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      swal({
        title: "Please fill all required fields",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
    } else {
      swal({
        title: "Your Blog has been Published!",
        text: "",
        icon: "success",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
      axios
        .post("https://myways-backend.herokuapp.com/api/createBlog", {
          title: title,
          image: image,
          content: content,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            //redirect to login page
            history.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
          swal({
            title: "Registration Failed",
            text: "",
            icon: "error",
            buttons: {
              confirm: { text: "Okay", className: "sweet-warning" },
            },
          });
        });
    }
  };
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 p-12 bg-white sm:w-9/12 md:w-1/2 lg:w-7/12">
        <form className="mt-6">
          <label
            for="title"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Blog Title"
            autocomplete="title"
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            for="Image"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Image
          </label>
          <input
            id="Image"
            type="text"
            name="Image"
            placeholder="Image Link"
            autocomplete="new-Image"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <label
            for="Blog"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Blog Content
          </label>
          <textarea
            id="Blog"
            type="Image"
            name="Blog"
            placeholder="Enter your Blog"
            autocomplete="new-Image"
            onChange={(e) => setContent(e.target.value)}
            className="block w-full h-80 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <button
            type="submit"
            onClick={onSubmit}
            className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-700 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
