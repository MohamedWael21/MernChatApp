import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "react-toastify";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") return;
    if (search.length < 3)
      return toast.error("Serch term must be at least 3 characters long");
    const conversation = conversations.find((conversation) =>
      conversation.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("NO user Found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="text-white bg-black rounded-full input input-bordered"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="text-white border-none btn btn-circle bg-sky-500 hover:bg-black">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
