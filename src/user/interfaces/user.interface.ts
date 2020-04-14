import * as mongoose from 'mongoose'

export interface User extends mongoose.Document {
    readonly name: string;
    readonly email: string;
    readonly dob: number;
    readonly mobile: string;
    readonly password: string;
}