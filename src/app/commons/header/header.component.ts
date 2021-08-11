import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';

import {ApiServiceService} from '../../APIServices/api-service.service'
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
  avatarUrl: string;
  currentComponent: string;

  constructor(private cookieService:CookieService,
    private apiService: ApiServiceService,
    private location:Location) { }
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
    })
  }

  redirectLogin() {
    window.location.href = "/index";
  }

  viewProfile(idUser){
    this.currentComponent='User-Profile';
    this.location.go("/profile/"+idUser)
  }

  
}
