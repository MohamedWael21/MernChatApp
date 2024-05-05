import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);

  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const {
          data: {
            data: { users },
          },
        } = await axios.get("/api/users");
        setConversations(users);
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
