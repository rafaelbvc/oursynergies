import mongoose from "mongoose";



export interface IMessage extends Document {
    projectId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    message: string;
    timestamp: Date;
  }