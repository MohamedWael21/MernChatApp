import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";

const MessagesContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  const handleCloseMessage = () => {
    setSelectedConversation(null);
  };

  return (
    <>
      {selectedConversation ? (
        <div
          className={`sm:min-w-[450px] md:flex md:flex-col h-full ${
            selectedConversation ? "flex flex-col" : "hidden"
          }`}
        >
          <div className="flex items-center gap-1 px-4 py-2 mb-2 bg-slate-500">
            <span
              className="flex items-center justify-center cursor-pointer"
              onClick={handleCloseMessage}
            >
              <IoMdArrowBack />
            </span>
            <span className="font-bold text-gray-900">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </div>
      ) : (
        <NoChatSelected />
      )}
    </>
  );
};
export default MessagesContainer;
