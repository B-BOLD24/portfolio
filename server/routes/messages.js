const express=require("express")
const router=express.Router()
const Message=require("../models/Message")



router.post("/",async (req,res)=>{
   try{
    const message=new Message(req.body)
    await message.save()
    res.status(201).json(message)
   }catch(err){
    res.status(500).json({error:err.message})
   }
})

module.exports=router