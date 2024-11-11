import mongoose from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    status: "pending" | "in_progress" | "completed";
    assignedTo: mongoose.Types.ObjectId;
    projectId: mongoose.Types.ObjectId;
    comments: [];
    // comments: IComment[];
}