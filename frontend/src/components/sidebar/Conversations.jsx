import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div
      className={`flex flex-col ${
        loading ? "items-center flex-1 justify-center" : ""
      }   py-2 overflow-auto`}
    >
      {loading ? (
        <span className="loading loading-spinner loading-lg "></span>
      ) : (
        conversations.map((conversation, idx) => (
          <Conversation
            conversation={conversation}
            key={conversation._id}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))
      )}
    </div>
  );
};

export default Conversations;
