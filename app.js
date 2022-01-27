const express = require("express")
const app = express()
require("dotenv/config")
const morgan = require("morgan")
const mongoose = require("mongoose")
const CustomerRoute = require("./routes/CustomerRoute")
const error_handling = require("./helper/errorHandling")





const api = process.env.API_URL

//middleWares
//data can be readable by the express which send from the front end
app.use(express.json())
app.use(morgan("tiny"))
app.use(error_handling)




//routers
app.use(`${api}/user`,CustomerRoute)




//database mongoDB connection
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true,dbName:"FoodAppDB"})
.then(()=>{
    console.log("Database Connection is Successfull")
})
.catch((err)=>{
console.log(err)
})


var port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Server Running on http://localhost:${port}`)
})