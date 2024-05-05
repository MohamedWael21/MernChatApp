import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const messageContainerRef = useRef();
  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      messageContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="flex-1 px-4 overflow-auto scroll-smooth">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={messageContainerRef}>
            <Message message={message} />
          </div>
        ))}
      {loading &&
        Array.from({ length: 3 }).map((_, idx) => (
          <MessageSkeleton key={idx} />
        ))}
      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-500">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};
export default Messages;
