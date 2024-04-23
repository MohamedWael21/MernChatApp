import GenderCheckBox from "./GenderCheckBox";

const signup = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
          <form>
            <div>
              <label className="p-2 label">
                <span className="text-base capitalize">fullname</span>
              </label>
              <input
                type="text"
                placeholder="Enter Fullname"
                className="w-full h-10 bg-black input input-bordered"
              />
            </div>
            <div>
              <label className="p-2 label">
                <span className="text-base capitalize">username</span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full h-10 bg-black input input-bordered"
              />
            </div>
            <div>
              <label className="p-2 label">
                <span className="text-base capitalize">password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full h-10 bg-black input input-bordered"
              />
            </div>
            <div>
              <label className="p-2 label">
                <span className="text-base capitalize">confirm password</span>
              </label>
              <input
                type="password"
                placeholder="confirm Password"
                className="w-full h-10 bg-black input input-bordered"
              />
            </div>

            <GenderCheckBox />
            <a
              href="#"
              className="inline-block mt-2 text-sm transition hover:underline hover:text-blue-600 "
            >
              alerady have and account ?
            </a>
            <div>
              <button className="mt-2 text-white bg-black border-none btn btn-block btn-sm hover:bg-blue-500">
                {" "}
                Sign up
              </button>
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default signup;
