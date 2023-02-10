const express=require("express")
const app=express();
const port=4005
const bodyParser=require("body-parser")
const cors=require("cors")
const mongoose=require("mongoose")
const Content=require("./contentschema")


mongoose.set('strictQuery',true)
mongoose.connect("mongodb+srv://Ambica:Ambica12@cluster0.xpetb9l.mongodb.net/practicedb?retryWrites=true&w=majority")
    .then(()=>{
    	console.log("MongoDB Connected by KIRANMAYEE")
    })
    .catch((err)=>{
    	console.log(err)
    })
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
	console.log("working server")
})
app.get("/allow",(req,res)=>{
	Content.find()
	.then((result)=>console.log(result))
})


app.post("/add",(req,res)=>{
	const{name,passcode,email,number}=req.body
	const newData=new Content({
		name,passcode,email,number
	})
	newData.save()
	res.send("added")
})
app.post("/login",(req,res)=>{
	const{username,password}=req.body
	console.log(username,password)
})


app.listen(port,()=>console.log("port is running"))