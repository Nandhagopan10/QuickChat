import mongoose from "mongoose";

//Function to connect to MongoDB database
export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => 
            console.log("Database connected")
        );
        // Connect to MongoDB using the URI from environment variables
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
    } catch (error) {
        console.log(error);

    }   
};