import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

const MessagesContainer = () => {
  const isChatOpen = false;
  return (
    <>
      {isChatOpen ? (
        <div className="md:min-w-[450px] flex flex-col">
          <div className="px-4 py-2 mb-2 bg-slate-500">
            <span className="label-text">To:</span>{" "}
            <span className="font-bold text-gray-900">John doe</span>
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
