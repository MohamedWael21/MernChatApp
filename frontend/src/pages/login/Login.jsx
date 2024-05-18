import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import {Link} from 'react-router-dom'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
  };
  return (
    <div className="flex flex-col items-center justify-center sm:min-w-96">
      <div className="w-full p-6 text-gray-300 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center">
          Login <span className="text-blue-500">ChatApp</span>{" "}
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label className="p-2 label">
              <span className="text-base capitalize ">username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full h-10 bg-black input input-bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="p-2 label">
              <span className="text-base capitalize ">password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 bg-black input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="inline-block mt-2 text-sm transition hover:underline hover:text-blue-600 "
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button
              className="mt-2 text-white bg-black border-none btn btn-block btn-sm hover:bg-blue-500"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
