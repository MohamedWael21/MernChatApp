import MessagesContainer from "../../components/messages/MessagesContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="md:flex h-[450px] md:h-[550px] rounded-lg overflow-auto sm:overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-0 backdrop-blur-lg">
      <Sidebar />
      <MessagesContainer />
    </div>
  );
};

export default Home;
