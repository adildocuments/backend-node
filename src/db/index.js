import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";
const app = express();

async function connectDb() {
  try {
    const initiateConnection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Server is running on connection ${initiateConnection.connection.host}`
    );
  } catch (error) {
    console.log("Error connect Failed:", error);
    process.exit(1);
  }
}

export default connectDb;
