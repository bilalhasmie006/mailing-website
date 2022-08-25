// const express = require("express");
// const bodyParser = require('body-parser');
// const app = express();


// const mailchimp = require("@mailchimp/mailchimp_marketing");

// mailchimp.setConfig({
//   apiKey: "16ec9e0b25734a185f42ed4020327db2-us12",
//   server: "us12",
// });



// //we cannot create multiple list because we requires mailshimps subsciption
// // const run = async () => {
// //       const response = await mailchimp.lists.createList({
// //         name: "bilal",
// //         permission_reminder: "permission_reminder",
// //         email_type_option: true,
// //         contact: {
// //           company: "company",
// //           address1: "address1",
// //           city: "city",
// //           country: "country",
// //         },
// //         campaign_defaults: {
// //           from_name: "from_name",
// //           from_email: "Beulah_Ryan@hotmail.com",
// //           subject: "subject",
// //           language: "language",
// //         },
// //       });
// //       console.log(response);
// //     };
    
// //     run();
    







// app.use(express.static("public"));//for publish the css and images from server side

// app.use(bodyParser.json());
//  app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",(req,res)=>{

// res.sendFile(__dirname+"/signup.html");
// })
// var fname;
// var lname;
// var mail;

// app.post("/",(req,res)=>{

//       fname=req.body.firstname;
//       lname=req.body.lastname;
//       mail=req.body.mail;
    
//       async function run() {
//             const response = await mailchimp.ping.get();
//             console.log(response);
//             const response1 = await mailchimp.lists.getAllLists();
//             console.log(response1);
//             const response2 = await mailchimp.lists.getListMembersInfo("94caf9e824");
//             console.log(response2);
//             const response3 = await mailchimp.lists.addListMember("94caf9e824", {
//                 email_address: mail,
//                 full_name:fname,
//                 status: "subscribed",
//               });
              
          
          
//           }
          
//           run();



//     })



// app.listen(process.env.PORT || 3002,()=>{

// console.log("server is running")

// })

//////////////////
/////////////
///////////
//http request wala tareeqa (angela)
const express = require("express");
const bodyParser = require('body-parser');
const https = require("node:https");
const request = require("request");
const app = express();

app.use(express.static("public"));
 
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));





app.get("/",(req,res)=>{

res.sendFile(__dirname+"/signup.html");
})

app.post("/",(req,res)=>{

      console.log(req.body.firstname);
    var firstnamee=req.body.firstname;
   var lastnamee =req.body.lastname;
   var email =req.body.mail;



var data = {
   members: [
{
  email_address:email,
  status : "subscribed",
  merge_fields:{
FNAME: firstnamee,
LNAME : lastnamee

  }
}
]
};
var jsonData = JSON.stringify(data);

 const url ="https://us12.api.mailchimp.com/3.0/lists/94caf9e824";

const options = {
method : "POST",
auth:"angela1:16ec9e0b25734a185f42ed4020327db2-us12"
  

}
const reque= https.request(url,options,(response)=>{
if(response.statusCode===200)
{
      res.sendFile(__dirname+"/success.html");
}
else{
      res.sendFile(__dirname+"/failure.html");

}




response.on("data",(data)=>{
console.log(JSON.parse(data));

})

}  )
reque.write(jsonData);
reque.end(); 

      });
  




 

     
// http.request(   )




 app.listen(process.env.PORT || 3002,()=>{

console.log("server is running")

})