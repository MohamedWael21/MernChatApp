import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (inputs) => {
    const isValid = validateInput(inputs);

    if (!isValid) return;

    setLoading(true);

    try {
      const {
        data: {
          data: { user },
        },
      } = await axios.post("/api/auth/login", inputs);

      localStorage.setItem("chat-user", JSON.stringify(user));
      setAuthUser(user);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

function validateInput(inputs) {
  const isThereEmptyField = Object.keys(inputs).find((key) => !inputs[key]);

  if (isThereEmptyField) {
    toast.error("Please fill all fields");
    return false;
  }

  return true;
}

export default useLogin;
