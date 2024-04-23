const login = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-0 backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500">ChatApp</span>
          <form>
            <div>
              <label className="label p-2">
                <span className="text-base capitalize ">username</span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full input input-bordered h-10 bg-black"
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base capitalize ">password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10 bg-black"
              />
            </div>
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block transition "
            >
              {"Don't"} have an account?
            </a>
            <div>
              <button className="btn btn-block bg-black btn-sm mt-2 text-white border-none hover:bg-blue-500">
                {" "}
                Login
              </button>
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default login;
