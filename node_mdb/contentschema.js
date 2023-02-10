const mongoose =require("mongoose")

const contentSchema=new mongoose.Schema({
	name:String,
	email:String,
	passcode:String,
	number:String,
},{collection:"registration"})
const Content=mongoose.model("",contentSchema)

module.exports=Content
