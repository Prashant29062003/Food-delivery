import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://bhojandel:fooddelwithme@cluster0.pqiz724.mongodb.net/bhojan-del")
        .then(()=> console.log("DB connected"));
}