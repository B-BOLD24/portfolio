const mongoose=require("mongoose")

const profileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },

    introduction:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    github:{
        type:String,
    },
    linkedin:{
        type:String,
        required:true
    },
     resume:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model("Profile",profileSchema)