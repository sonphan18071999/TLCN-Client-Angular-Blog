import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName:String;
  showProfile:boolean;
  constructor(private cookieService:CookieService) { }
  
  ngOnInit(): void {
    this.showProfile=false;
    //Kiểm tra xem người dùng đã đăng nhập chưa.
    if(this.cookieService.get('userIdLogged')){
      this.showProfile=true;
      this.userName=this.cookieService.get('userName');
    }
  }

}
