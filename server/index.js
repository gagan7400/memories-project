const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())
// import postRoutes from './routes/posts.js'
const postRoutes = require('./routes/posts.js')
app.use('/posts' ,postRoutes)
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const CONNECTION_URL = 'mongodb+srv://Gagan_7400:Gagan_2004@cluster0.wwekmmt.mongodb.net/memories?retryWrites=true&w=majority'
const PORT = process.env.PORT ||5001;

mongoose.connect(CONNECTION_URL ,{useNewUrlParser :true , useUnifiedTopology:true})
.then(()=>app.listen(PORT ,()=>{console.log("serer running on port : " + PORT)}))
.catch((error)=>    console.log(error)) 
// mongoose.set('useFindAndModify',false)



  
 
//write a program to print all prmutations of string 