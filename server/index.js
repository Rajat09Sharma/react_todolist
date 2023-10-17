import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://rajat:NocbLGG6xWcXjI3x@cluster0.jxxg76p.mongodb.net/todolistDB");

const itemSchema= new mongoose.Schema({
    item:String
});

const Item = mongoose.model("Item",itemSchema);

app.get("/",async(req,res)=>{
    try{
        const result= await Item.find({});
        res.send(result)
    }catch(err){
        console.log(err);
        res.send(err);
    }
})

app.post("/post",async(req,res)=>{
    console.log(req.body.text);
    const userText=req.body.text;
    const newItem= new Item({
        item:userText
    });
    newItem.save();
    res.send("sucess.");

});

app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    console.log(id);
    try{
        const result = await Item.findByIdAndRemove({_id:id});
        console.log("successfully deleted item.");
        res.send(result.data)
    }catch(err){
        console.log(err);
    }
})




app.listen(3001,function(req,res){
    console.log("server started successfully on port 3001.");
});