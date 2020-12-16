import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { couldStartTrivia } from 'typescript';
import {ApiServiceService} from '../APIServices/api-service.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName:String;
  showProfile:boolean;
  searchContent:string;
  idUser:string;
  avatarUrl:string;
  constructor(private cookieService:CookieService,
    private apiService:ApiServiceService) { }
  
  ngOnInit(): void {
    this.showProfile=false;
    this.idUser=this.cookieService.get('userIdLogged')
    //Kiểm tra xem người dùng đã đăng nhập chưa.
    if(this.cookieService.get('userIdLogged')){
      this.showProfile=true;
      this.userName=this.cookieService.get('userName');
    }
    this.apiService.getInforUser(this.idUser).subscribe(ok=>{
      this.avatarUrl=ok.UserInfo.userAvatar
      console.log(ok)
    })

  }
  
}
