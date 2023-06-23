const express = require('express'); // importing express
const taskInfo=require('./routes/taskInfo'); // importing taskinfo to use 
const routes = require('express').Router(); //creating routes
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));// body parser
app.use(bodyParser.json()); // body parser for Post method
app.use(routes); // this will ensure to use routes 

const port = process.env.PORT || 3000 // creating environment varibale

routes.get('/', (req,res)=>{
    res.status(200).send("YOU are live ")
});

routes.use('/task',taskInfo)

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});