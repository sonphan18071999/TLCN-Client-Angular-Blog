import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index-screen',
  templateUrl: './index-screen.component.html',
  styleUrls: ['./index-screen.component.scss']
})
export class IndexScreenComponent implements OnInit {
  side="over";
  idUserLogin:any;
  constructor(private cookieService:CookieService,private router: Router, private toast:ToastrService) { }
  currentComponent:string;
  ngOnInit(): void {
    this.idUserLogin=this.cookieService.get("userIdLogged")
    this.currentComponent="Index-Post-InProcess";
  }
  getStateComponent(state:string){
    this.currentComponent=state;
  }
  gotoPostArticlePage(){
    if(this.cookieService.get('userIdLogged')==''){
      this.router.navigateByUrl('/login');
      this.toast.error("Identify yourself first","System Message:")
    }else{  
      this.router.navigateByUrl('/create-article');
    }

  }
}
