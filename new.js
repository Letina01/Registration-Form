const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")

const app = express ();
dotenv.config();
const port= process.env.PORT || 3000;

const username=process.env.MONGODB_USERNAME;
const password=process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.szoxarg.mongodb.net/RegistrationFormDB`,{ useNewUrlParser: true, useUnifiedTopology: true })
const registerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const Register = mongoose.model("Register", registerSchema);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/module/index.html");
})
app.post("/register", async (req, res) => {
    try{
     const{name,email,passwpod}=reg.body;
     const existinguser = await register.findOne({email});
     if(!existinguser){
         const register = new register({
         name,
         email,
         password
     });
     await register.save();
     res.redirect("/sucess");
    }
    else{
     cpnsole.log("user already exist");
     res.redirect("/error");
    }
     }
     
    catch{
     console.log("error");
     res.redirect("/error");
 
    }
 });
 
app.get("/sucess",(req,res)=>{
    res.sendFile(__dirname+"/module/sucess.html");
});
app.get("/error",(req,res)=>{
    res.sendFile(__dirname+"/module/error.html")
});

app.listen(port,()=>{
    console.log(`server is running on port $(port)`);
});