const express = require("express");
const bodyParser = require('body-parser');
const app = express();


const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "16ec9e0b25734a185f42ed4020327db2-us12",
  server: "us12",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();




app.use(express.static("public"));//for publish the css and images from server side

app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{

res.sendFile(__dirname+"/signup.html");
})


app.post("/",(req,res)=>{

    req.body.firstname
    req.body.lastname
    
    console.log(req.body.firstname);
    })



app.listen(process.env.PORT || 3002,()=>{

console.log("server is running")

})