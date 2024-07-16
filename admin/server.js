import express from "express";
import dotenv from "dotenv";
import authRouters from "./routes/auth.routers.js"
const app = express();

dotenv.config()
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send('Hello')
})


app.use("/api/auth",authRouters)

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))