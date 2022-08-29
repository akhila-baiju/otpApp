const express =require('express');
const data = require('./src/model/mailData')
const cors = require("cors");
const maildata = require('./src/model/mailData');
const app=new express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 3000;
const nodemailer = require('nodemailer');

app.post('/insert',function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
   // let id = (Math.random()*100);
    let id = Math.floor(Math.random() * 10000);
    console.log("id=="+req.body.email);
    //let x=11423;
    var mail = {
       mailId: req.body.email,
        otp: id 
       }
    var maildetails = new data(mail);
      maildetails.save();
      const email=req.body.email;
      //const email =  await maildetails.findOne({ email: maildetails.mailId })
   var transport = nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          user: 'wishyouon2022@gmail.com',
          pass: 'cwlomsbuzzptsfun'
        }
      }
    )
  
    var mailOptions = {
        from: 'wishyouon2022@gmail.com',
        to: email,
        subject: 'OTP',

        text:  'you are getting this otp for registering in otp app '+id 
               }

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error + " error in senting email")
      }
      else {
        console.log("email sent " + info.response)
      }
    })


})
app.get("/:id",  (req, res) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
 


     const id = req.params.id;
     maildata.find({mailId: id}).then((data)=>{
      res.send(data);
      console.log(data);

      });
})


  //-------
  /*app.get("/:id",  (req, res) => {
  
    const id = req.params.id;
    Bookdata.findByIdAndDelete({"_id":id})
    .findOne({"_id":id})
      .then((book)=>{
        //  console.log(product);
          res.send(book);
      });
  })*/
//------
app.listen(PORT , (req,res)=>{
    console.log(`Server Running on PORT ${PORT}`);
})
