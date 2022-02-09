const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//urlencoded : post coming from Form. Extended to true: post nested objects
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  //res.send("Hello world");// Individual bytes
  // _dirname: the file path of the current file, no matter the location
  res.sendFile(__dirname+ "/index.html");
});
//handle any post req
app.post("/",function(req,res){
  var num1= Number(req.body.num1);
  var num2= Number(req.body.num2);
  var result= num1+num2;
  res.send("The result:"+result);
});
app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / (height*height);
  console.log(result);
  res.send("Your BMI is"+ result);
});
app.listen("3000");
