require("dotenv").config()
const mongoose=require("mongoose")
const express=require("express")
const app=express()
const cors=require("cors")
const projectRoutes=require("./routes/projects")
const messageRoutes=require("./routes/messages")
app.use(cors())
app.use(express.json())

app.use("/api/projects",projectRoutes)
app.use("/api/messages",messageRoutes)

const MONGO_URI=process.env.MONGO_URI
const PORT=process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.json({message:"Server is running"})
})
async function connectDB(){
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Mongo connected")
        app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))
    
    }catch(err){
        console.log("MongoDB error :",err);
        
    }
}
connectDB()









