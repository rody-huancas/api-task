import app from "./app.js";
import { connectDB } from "./db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();
app.listen(4000);
console.log('server or port',4000);