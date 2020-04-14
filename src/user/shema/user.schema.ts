import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: Number,
    mobile: String,
    password: String,
    created_at: { type: Date, default: Date.now }
})