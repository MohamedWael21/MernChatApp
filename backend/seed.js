import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/userModel.js";
import Message from "./models/messageMode.js";
import Conversation from "./models/conversationModel.js";


dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to MongoDB for seeding...");

        await User.deleteMany({});
        await Message.deleteMany({});
        await Conversation.deleteMany({});
        console.log("Cleared existing data.");

        console.log("Fetching random male users from API...");
        const response = await fetch("https://randomuser.me/api/?results=10&gender=male");
        const data = await response.json();
        const apiUsers = data.results;

        const usersToCreate = apiUsers.map(u => ({
            fullName: `${u.name.first} ${u.name.last}`,
            username: u.login.username,
            password: "password123", 
            gender: u.gender,
            profilePic: u.picture.large
        }));

        const users = await User.create(usersToCreate);
        console.log(`${users.length} Users seeded successfully.`);

        console.log("Seeding messages...");
        for (let i = 0; i < 15; i++) {
            const sender = users[Math.floor(Math.random() * users.length)];
            let receiver = users[Math.floor(Math.random() * users.length)];
            
            while (receiver._id.toString() === sender._id.toString()) {
                receiver = users[Math.floor(Math.random() * users.length)];
            }

            let conversation = await Conversation.findOne({
                participants: { $all: [sender._id, receiver._id] }
            });

            if (!conversation) {
                conversation = await Conversation.create({
                    participants: [sender._id, receiver._id]
                });
            }

            await Message.create({
                sender: sender._id,
                receiver: receiver._id,
                conversation: conversation._id,
                message: `Hey ${receiver.fullName}, message ${i + 1} from ${sender.fullName}!`
            });
        }

        console.log("Random Messages and Conversations seeded successfully.");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

seedData();
