import express from "express";
import cors from "cors";
const app = express();
app.use(express.json({limit: "50mb"}));
app.use(cors({
    origin: "*"
}))




import authRoutes from "./routes/auth.routes.js";
app.use('/api/auth/v1', authRoutes);


export {app};