import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { routers } from "./src/Routes/routes";
import cors from "cors";

const app = express();
dotenv.config();
const port = process.env.PORT || 80;

// MongoUrl for connection with database
const url =process.env.MongoUrl; 
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

// Make sure mongo is connected
con.on("open", () => {
  console.log("done...");
});

// For allow form data 
app.use(express.json());

// To avoid cors error
app.use(cors({ origin: true, credentials: true }));

// Common router
app.use("/api/v1", routers);

// Assign port
app.listen(port, () => {
  console.log(`Server is runnig on ${port}`);
});
