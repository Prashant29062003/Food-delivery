import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"



// app config
const app = express()
const port = 4000

// middleware 
app.use(express.json())
app.use(cors())


// DB Connection
connectDB()

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))

// get method
app.get("/",(req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}/`);
})

// mongodb+srv://bhojandel:fooddelwithme@cluster0.pqiz724.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0