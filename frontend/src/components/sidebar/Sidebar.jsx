import Conversations from "./Conversations";
import Logout from "./Logout";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="flex flex-col p-4 border-r border-slate-500">
      <SearchInput />
      <div className="px-3 divider"></div>
      <Conversations />

      <Logout />
    </div>
  );
};

export default Sidebar;
