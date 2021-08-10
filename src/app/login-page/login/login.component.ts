import { Component, OnInit,NgZone } from '@angular/core';
import {LoginService} from'./login.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CookieService]
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;
  typeAccount:String;
  userName:String;
  isAdmin:boolean=false;
  constructor(private loginService:LoginService,private router: Router,
    private _cookieService:CookieService, private ngZone:NgZone, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.typeAccount="normal"
    this.deleteAllCookies();
    /**Using Facebook API to login */
    this._cookieService.set( 'userIdLogged', "" );
    this._cookieService.set( 'userName', "" );
    this.fbLibrary();
  }
  deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
  onLogin(){
    alert("meow meow")
  }
  fbLibrary() {
  
      (window as any).fbAsyncInit = function() {
        window['FB'].init({
          appId      : '3374119062643030',
          cookie     : true,
          xfbml      : true,
          version    : 'v9.0'
        });
        window['FB'].AppEvents.logPageView();
      };
  
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  
  }
  login() {
    window['FB'].login((response) => {
        // console.log('login response',response);
        if (response.authResponse) {
          window['FB'].api('/me', {
            fields: 'last_name, first_name, email'
          }, (userInfo) => {
 
            // console.log("user information");
            // console.log(userInfo);

            //Lưu email người dùng xuống cookie.
            this._cookieService.set( 'userIdLogged', userInfo.email );
            this._cookieService.set( 'userName', userInfo.first_name+' '+ userInfo.last_name );

            this.email=userInfo.id+"@gmail.com"
            this.userName=userInfo.first_name +" "+userInfo.last_name;
            this.typeAccount="facebook";
            this.ngZone.run(()=>this.submit());

          });
        } else {
          console.log('User login failed');
        }
      }, {scope: 'email'});
  }
  submit():void{
  this.loginService.checkUser(this.email,this.userName,this.typeAccount,this.password).subscribe(
    res=>{
      this.toastr.success('Login successfully', 'Login');
      this._cookieService.set( 'userIdLogged', res.user._id );
      this._cookieService.set( 'userName', res.user.name );
      if(this.isAdmin){
        this.router.navigate(['admin/index'])
      }else{
        this.router.navigate(['index']);
      }
    },
    err=>{
      this.toastr.error('Username or password not correct', 'Login');
    }
  )
  }
  checkAdminAuthenticate(event){
    if(this.isAdmin){
      this.typeAccount="admin"
    }else{
      this.typeAccount="normal"
    }
  }
}
