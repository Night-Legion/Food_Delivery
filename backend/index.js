import {app} from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
dotenv.config();
const port = process.env.port || 3000;






app.listen(port, () => {
    connectDB()
    console.log(`Server is running on port ${port}`);
})