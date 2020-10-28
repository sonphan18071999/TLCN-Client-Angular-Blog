import { Component, OnInit } from '@angular/core';
import {LoginService} from'./login.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

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
  constructor(private loginService:LoginService,private router: Router,
    private _cookieService:CookieService) { }

  ngOnInit(): void {
    this.typeAccount="normal"
    /**Using Facebook API to login */
    this.fbLibrary();
  }
  fbLibrary() {
  
      (window as any).fbAsyncInit = function() {
        window['FB'].init({
          appId      : '3374119062643030',
          cookie     : true,
          xfbml      : true,
          version    : 'v3.1'
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
        console.log('login response',response);
        if (response.authResponse) {
 
          window['FB'].api('/me', {
            fields: 'last_name, first_name, email'
          }, (userInfo) => {
 
            console.log("user information");
            console.log(userInfo);

            //Lưu email người dùng xuống cookie.
            this._cookieService.set( 'userIdLogged', userInfo.email );
            this.email=userInfo.email;
            this.userName=userInfo.first_name+userInfo.last_name;
            this.typeAccount="facebook";
            this.submit()
          });
           
        } else {
          console.log('User login failed');
        }
      }, {scope: 'email'});
  }
  submit(){
    this.loginService.checkUser(this.email,this.userName,this.typeAccount,this.password).subscribe(
      res=>{
        alert("Đăng nhập thành công!");
        this.router.navigate(['index']);
        this._cookieService.set( 'userIdLogged', res.user._id );
      },
      err=>{
        alert("Mật khẩu hoặc tài khoản không đúng!");
        this._cookieService.set( 'userIdLogged', "null" );
      }
    )
  }
}
