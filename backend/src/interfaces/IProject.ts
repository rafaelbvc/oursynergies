import mongoose from "mongoose";

export interface IProject extends Document {
    name: string;
    description: string;
    members: mongoose.Types.ObjectId[];
    tasks: mongoose.Types.ObjectId[];
    createdBy: mongoose.Types.ObjectId;
}