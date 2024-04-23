const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.iran.liara.run/public" alt="chat avatar" />
        </div>
      </div>

      <div className="text-white bg-blue-500 chat-bubble">hi what is up ?</div>
      <div className="flex items-center gap-1 text-xs opacity-50 chat-footer">
        12:46
      </div>
    </div>
  );
};
export default Message;
