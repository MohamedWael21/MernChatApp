import { useAuthContext } from "../../context/AuthContext";
import extractTime from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isFromMe = authUser._id === message.sender;
  const chatDirection = isFromMe ? "chat-end" : "chat-start";
  const profilePic = isFromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBg = isFromMe ? "bg-blue-500" : "bg-black";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatDirection}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="chat avatar" />
        </div>
      </div>

      <div className={`text-white ${bubbleBg} chat-bubble ${shakeClass}`}>
        {message.message}
      </div>
      <div className="flex items-center gap-1 pb-1 mt-2 text-xs text-gray-400 chat-footer">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};
export default Message;
