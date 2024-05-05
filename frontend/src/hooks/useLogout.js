import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);

    try {
      await axios.post("/api/auth/logout");
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
export default useLogout;
