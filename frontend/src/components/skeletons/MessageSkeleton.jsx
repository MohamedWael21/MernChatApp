const MessageSkeleton = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-black rounded-full skeleton shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="w-40 h-4 bg-black skeleton"></div>
          <div className="w-40 h-4 bg-black skeleton"></div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        <div className="flex flex-col gap-1">
          <div className="w-40 h-4 bg-black skeleton"></div>
        </div>
        <div className="w-10 h-10 bg-black rounded-full skeleton shrink-0"></div>
      </div>
    </>
  );
};
export default MessageSkeleton;
