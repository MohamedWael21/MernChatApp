import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from "react-toastify";
import axios from "axios";

function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      try {
        const {
          data: {
            data: { messages },
          },
        } = await axios.get(`/api/messages/${selectedConversation._id}`);
        setMessages(messages);
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation, setMessages]);

  return { loading, messages };
}
export default useGetMessages;
