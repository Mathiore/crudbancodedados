const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
//app.set("views", path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))

app.get('/',(req,res)=>{
    res.send("Crud application");
})

app.listen(3000, ()=>{console.log(`Server is running on http://localhost:${3000}`)})