let express = require('express');
let cors=require('cors')
let app=express();
app.use(cors());
app.use(express.json());
let port=3000;
app.listen(port,()=>{
    console.log("started");
})
app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose');
main().catch(err => console.log(err))
.then(()=>{console.log("conneted to db")});

async function main() {
  await mongoose.connect('mongodb+srv://user1:user@chating.wiordlq.mongodb.net/');
}
let messageschema=new mongoose.Schema({
    from:String,
    message:String
})
let message=mongoose.model("message",messageschema);

app.post("/",async (req,res)=>{
let a=req.body;
await message.create({message:a.message,from:a.from});
res.send({added:"true"});
})