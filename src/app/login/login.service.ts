import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClient) { }
  public checkUser(email,userName,typeAccount,password){
    var data= {
      "email":email,
      "password":password,
      "userName":userName,
      "typeAccount":typeAccount

    }
    return this.httpClient.post<any>(`https://be-nodejs-tlcn.herokuapp.com/api/check-user`,data);
  }
}
