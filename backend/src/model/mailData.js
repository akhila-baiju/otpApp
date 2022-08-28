const mongoose =require('mongoose');
//mongoose.connect("mongodb://localhost:27017/otpapp");
mongoose
  .connect("mongodb+srv://admin:user123@project1.cfkyt.mongodb.net/otpapp?retryWrites=true&w=majority" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });
  
  const Schema = mongoose.Schema;
  var OtpSchema = new Schema({
    mailId:String,
    otp:Number,
    });
var maildata = mongoose.model('maildetails',OtpSchema);
module.exports =maildata;