import { Component, OnInit } from '@angular/core';
import {LoginService} from'./login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName:String;
  password:String;
  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.loginService.checkUser(this.userName,this.password).subscribe(
      res=>{
        alert("Đăng nhập thành công!");
        this.router.navigate(['index']);
      },
      err=>{
        alert("Mật khẩu hoặc tài khoản không đúng!");
      }
    )
  }
}
