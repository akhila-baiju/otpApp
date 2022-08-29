import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { ServeService } from '../serve.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:String ="OTP Authentication App";
  constructor(public mail:ServeService,public route: Router) { }

  ngOnInit(): void {
  }
  userData={
    email:""
  }
send()

{ 
     this.mail.sendMail(this.userData);
    //alert("mail sent to "+ this.email);
    localStorage.setItem("emailID", this.userData.email);
   this.route.navigate(['otp']);
}
}

