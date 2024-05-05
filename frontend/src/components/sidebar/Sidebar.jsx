import useIsMobileScreen from "../../hooks/useIsMobileScreen";
import useConversation from "../../zustand/useConversation";
import Conversations from "./Conversations";
import Logout from "./Logout";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { selectedConversation } = useConversation();
  const isMobile = useIsMobileScreen();
  return (
    <div
      className={` ${
        selectedConversation && isMobile ? "hidden" : "flex"
      }  flex-col p-4 border-r border-slate-500`}
    >
      <SearchInput />
      <div className="px-3 divider"></div>
      <Conversations />

      <Logout />
    </div>
  );
};

export default Sidebar;
