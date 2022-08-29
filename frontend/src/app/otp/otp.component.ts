import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  title:String ="Varify OTP";
  constructor(public otpservvice:ServeService,public route: Router) { }

  ngOnInit(): void {
  }
  mailid=localStorage.getItem("emailID");
  otpdata={
    otp:0
  }
  details={
    mail:'',
    otp:0
  }
check()
{
  this.otpservvice.checkOtp(this.mailid).subscribe((data)=>{
    this.details=JSON.parse(JSON.stringify(data));
    console.log(this.details)
    console.log("otp1="+this.details.mail);
    console.log("otp2="+this.otpdata.otp)
}) 
}
 

}
