import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import useSignup from "../../hooks/useSignup";
import {Link} from 'react-router-dom'

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup, loading } = useSignup();

  const handleInputChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };
  const handleGenderCahange = (newGender) => {
    setInputs((prevInputs) => ({ ...prevInputs, gender: newGender }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center sm:min-w-96">
      <div className="w-full p-6 text-gray-300 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center ">
          Sign Up <span className="text-blue-500">ChatApp</span>{" "}
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="p-2 label">
              <span className="text-base capitalize">fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="w-full h-10 bg-black input input-bordered"
              value={inputs.fullName}
              name="fullName"
              onChange={handleInputChange}
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
              value={inputs.username}
              name="username"
              onChange={handleInputChange}
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
              value={inputs.password}
              name="password"
              onChange={handleInputChange}
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
              value={inputs.confirmPassword}
              name="confirmPassword"
              onChange={handleInputChange}
            />
          </div>

          <GenderCheckBox
            gender={inputs.gender}
            onGenderChange={handleGenderCahange}
          />
          <Link
            to="/login"
            className="inline-block mt-2 text-sm transition hover:underline hover:text-blue-600 "
          >
            alerady have and account ?
          </Link>
          <div>
            <button
              className="mt-2 text-white bg-black border-none btn btn-block btn-sm hover:bg-blue-500 "
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
