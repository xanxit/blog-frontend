function Login({ uniqueID, password, setuniqueID, setPassword, handleLogin }) {
  return (
    <div className="flex flex-wrap mx-12 mb-12">
      <div className="w-full md:w-1/2">
        <img src="/assets/login/Loginsvg.svg" alt="Login SVG" />
      </div>
      <div className="md:w-1/2 w-full flex justify-center mx-auto items-center align-middle md:mt-0 mt-12">
        <form>
          <div className="flex flex-col font-bold items-center md:ml-6 md:px-12 lg:px-0 lg:ml-0">
            <div className="text-2xl lg:text-4xl mb-3 lg:mb-6 text-gray-400">
              Login....
            </div>

            <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 mx-auto my-2">
              <img src="/assets/login/User.svg" alt="UserId" />
              <div>
                <input
                  className="py-1 pl-5 mr-10 outline-none"
                  placeholder="Enter your UserId"
                  type="text"
                  value={uniqueID}
                  onChange={(e) => setuniqueID(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 mx-auto my-2">
              <img src="/assets/login/Password.svg" alt="Password" />
              <div>
                <input
                  className="py-1 pl-5 mr-10 outline-none"
                  placeholder="Enter your Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-white bg-yellow-400 w-full bg-yellow-400 py-2 rounded-lg cursor-pointer mt-5 md:mt-2 lg:mt-5 text-center">
              <button
                type="submit"
                onClick={handleLogin}
                className="font-bold outline-none"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
