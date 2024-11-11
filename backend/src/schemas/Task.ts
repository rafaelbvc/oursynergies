import mongoose, { Schema } from "mongoose"
import { ITask } from "src/interfaces/ITask";
import  User  from "./User"
import Project from "./Project";


  
const TaskSchema: Schema = new Schema({
  title: { 
    type: String, 
    required: true 
},
  description: { 
    type: String 
},
  status: { 
    type: String, 
    enum: ["pending", "in_progress", "completed"], default: "pending" },
  assignedTo: { 
    type: mongoose.Schema.Types.ObjectId, 
    //outro jeito
    ref: User,
    // ref: "User" 
},
  projectId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: Project, 
    required: true 
},
  comments: [
    {
      userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: User 
    },
      comment: { 
        type: String 
    },
      date: { 
        type: Date, 
        default: Date.now 
    },
    },
  ],
});

export default mongoose.model<ITask>("Task", TaskSchema);