import React from "react";

export default function BlogEditor() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
          <div className="p-4 border-b">
            <h2 className="text-2xl ">Write your Blog!!</h2>
            <p className="text-sm text-gray-500">Enter Blog Details</p>
          </div>
          <div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Author name</p>
              <input
                type="text"
                id="name"
                placeholder="Enter your Full Name*"
                //   onChange={onChangeName}
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-800 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                required={true}
              />
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Title</p>
              <input
                type="text"
                id="Title"
                placeholder="Enter Title*"
                //   onChange={onChangeName}
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-800 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                required={true}
              />
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Category</p>
              <input
                type="text"
                id="category"
                placeholder="Enter Category"
                //   onChange={onChangeName}
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-800 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                required={true}
              />
            </div>

            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Blog Description</p>
              <textarea
                placeholder="Enter Blog Description"
                className="resize-none shadow appearance-none border rounded-full w-full py-1 px-4 text-gray-800 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
              <p className="text-gray-600">Full Blog</p>
              <div className="space-y-2">
                <textarea
                  type="text"
                  placeholder="Enter Blog"
                  className="resize-none shadow appearance-none border rounded-lg w-full h-80 py-2 px-4 text-gray-800 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="transition duration-500 border-1 text-lg h-12 w-80 bg-white border-2 hover:bg-yellow-400 hover:text-white text-yellow-400 mt-2 px-3 rounded-md">
          <div>Publish your Blog</div>
        </button>
      </div>
    </div>
  );
}
