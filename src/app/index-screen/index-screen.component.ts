import { Component, OnInit,Input } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ApiServiceService} from '../APIServices/api-service.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-index-screen',
  templateUrl: './index-screen.component.html',
  styleUrls: ['./index-screen.component.scss']
})
export class IndexScreenComponent implements OnInit {
  avatarUrl: string;
  currentComponent:string;
  side = "over";
  idUserLogin:any;
  userName:String;
  showProfile:boolean;
  searchContent:string;
  idUser:string;

  constructor(private cookieService:CookieService,
    private router: Router, private toast:ToastrService,
    private apiService:ApiServiceService,
    private location:Location) { }
  ngOnInit(): void {
    this.idUserLogin=this.cookieService.get("userIdLogged")
    this.currentComponent="Index-Post-InProcess";
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
