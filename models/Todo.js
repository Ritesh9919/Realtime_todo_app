import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    text:String
});


export const Todo = mongoose.model('Todo', todoSchema);