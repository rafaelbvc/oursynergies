import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "src/interfaces/IUser";



const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "member", "viewer"], default: "member" },
});

export default mongoose.model<IUser>("User", UserSchema);