import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async (inputs) => {
    const isValid = validateInput(inputs);

    if (!isValid) return;

    setLoading(true);

    try {
      const {
        data: {
          data: { user },
        },
      } = await axios.post("/api/auth/signup", inputs);

      localStorage.setItem("chat-user", JSON.stringify(user));
      setAuthUser(user);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

function validateInput(inputs) {
  const isThereEmptyField = Object.keys(inputs).find((key) => !inputs[key]);

  if (isThereEmptyField) {
    toast.error("Please fill all fields");
    return false;
  }

  if (inputs.password !== inputs.confirmPassword) {
    toast.error("Password do not match");
    return false;
  }

  if (inputs.password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}

export default useSignup;
