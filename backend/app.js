import express from "express";
import cors from "cors";
const app = express();
app.use(express.json({limit: "50mb"}));
app.use(cors({
    origin: "*"
}))







export {app};