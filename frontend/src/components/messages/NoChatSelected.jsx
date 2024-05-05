import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="items-center justify-center hidden w-full h-full md:flex">
      <div className="flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl">
        <p>Welcome 👋 {authUser.fullName} 🎅</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl text-center md:text-6xl" />
      </div>
    </div>
  );
};
export default NoChatSelected;
