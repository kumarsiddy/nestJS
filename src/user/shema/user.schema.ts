import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: String,
    email:  {
        type: String,
        unique: true,
        required: true
    },
    dob: Number,
    mobile:  {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    created_at: { type: Date, default: Date.now }
})