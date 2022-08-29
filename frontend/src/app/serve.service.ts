import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServeService {
  server_address: string = 'http://localhost:3000';
  constructor(public http:HttpClient) { }
  sendMail(item:any)
  {
     return this.http.post<any>(`${this.server_address}/insert`,item)
          .subscribe(data => { console.log(data) });
    }

    checkOtp(id:any)
    {
    
        return this.http.get(`${this.server_address}/`+id);
    
    }

}
