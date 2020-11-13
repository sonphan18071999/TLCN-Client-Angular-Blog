import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-index-screen',
  templateUrl: './index-screen.component.html',
  styleUrls: ['./index-screen.component.scss']
})
export class IndexScreenComponent implements OnInit {
  side="over";
  idUserLogin:any;
  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
    this.idUserLogin=this.cookieService.get("userIdLogged")
  }
  ShowAlert(){
    alert("Hello world")
  }
  
}
