import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClient) { }
  public checkUser(userName,password){
    var data= {
      "userName":userName,
      "password":password
    }
    return this.httpClient.post<any>(`http://localhost:4000/api/check-user`,data);
  }
}
