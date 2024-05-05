import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import { toast } from "react-toastify";

function useSendMessage() {
  const [loading, setLodaing] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLodaing(true);
    try {
      const {
        data: { message: newMessage },
      } = await axios.post(`/api/messages/send/${selectedConversation._id}`, {
        message,
      });
      setMessages([...messages, newMessage]);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLodaing(false);
    }
  };

  return { loading, sendMessage };
}
export default useSendMessage;
