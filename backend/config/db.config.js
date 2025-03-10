import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.log(() => console.log(`Error: ${err.message}`)));
    }catch(err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}