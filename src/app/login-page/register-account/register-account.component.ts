import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../APIServices/api-service.service'

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {

  constructor(private apiServiceService:ApiServiceService) {

   }
  firstName:string=null;
  lastName:string=null;
  name:string=null;
  email:string=null;
  phone:number=null;
  password:string=null;
  passwordConfirm:string=null;
  address:string=null;
  agreeTerm:boolean=false;
  ngOnInit(): void {
  }
  UpdateData(e,order){
    switch(order){
      case 1:
        this.firstName=e;
        break;
      case 2:
        this.lastName=e;
        break;
      case 3:
        this.email=e;
        break;
      case 4:
        this.phone=e;
        break;
      case 5:
        this.password=e;
        break;
      case 6:
        this.passwordConfirm=e;
        break;
      case 7:
        this.address=e;
        break;
      default:
        this.agreeTerm=true;
        break;
    }
  }
  SubmitUser(){
   
    if(this.email==""){
      alert("Email cannot be empty");
    }else if(this.password==""){
      alert("Password cannot be empty")
    }else if(this.passwordConfirm==""){
      alert("Password confirm cannot be empty")
    }else if(this.phone==null){
      alert("Phone number cannot be empty")
    }else{
      if (this.password.trim() != this.passwordConfirm.trim()) {
        alert("Password confirm isn't correct")
      } else if (this.agreeTerm==false) {
        alert("You must agree to the term");
      }else{
        console.log("first name " + this.firstName);
        console.log("last name " + this.lastName);
        console.log("email " + this.email)
        console.log("Phone " + this.phone);
        console.log("password " + this.password);
        console.log("CF password " + this.passwordConfirm);
        console.log("Adrres " + this.address);
        this.apiServiceService.createAccount(this.firstName,this.lastName,this.email,this.phone,
          this.password,this.address).subscribe((res)=>{
            alert("Create account successfully");
          },(err)=>{
            alert("User already exist in system");
          })
      }
    }
  }
}
