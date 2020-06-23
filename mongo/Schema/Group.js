import mongoose, { Schema } from "mongoose";

const GroupSchema = new mongoose.Schema({
	groupName: { type: String },
	users: [{ type: Schema.Types.ObjectId, ref: "users" }],
	place: { type: String },
	time: { type: Date },
	iconnum: { type: Number },
	food: { type: String },
});

export const Groups = mongoose.model("groups", StorySchema);
