import mongoose, { Schema } from "mongoose"
import { IMessage } from "src/interfaces/IMessage";
import Project from "./Project";
import User from "./User";



  
const MessageSchema: Schema = new Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: Project, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IMessage>("Message", MessageSchema);