import mongoose, { Schema } from "mongoose";
import { IProject } from "../interfaces/IProject";




  
const ProjectSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model<IProject>("Project", ProjectSchema);