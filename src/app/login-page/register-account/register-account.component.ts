import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ApiServiceService } from '../../APIServices/api-service.service'


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {

  constructor(private apiServiceService:ApiServiceService, private formBuilder: FormBuilder) {

   }
  // firstName:string=null;
  // lastName:string=null;
  // name:string=null;
  // email:string=null;
  // phone:number=null;
  // password:string=null;
  // passwordConfirm:string=null;
  // address:string=null;
  // agreeTerm: boolean = false;
  
  //#region  form 
  form: FormGroup;


  registerFormControl = new FormControl('', [
    Validators.required,
    Validators.email ,
  ]);




  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      name:[null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null],
      password: [null, Validators.required],
      passwordConfirm: [null, Validators.required],
      address:[''],
      isAgreeTerm: [false, Validators.required],
    })

  }
  
  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset(){
    this.form.reset();
  }
  // UpdateData(e,order){
  //   switch(order){
  //     case 1:
  //       this.firstName=e;
  //       break;
  //     case 2:
  //       this.lastName=e;
  //       break;
  //     case 3:
  //       this.email=e;
  //       break;
  //     case 4:
  //       this.phone=e;
  //       break;
  //     case 5:
  //       this.password=e;
  //       break;
  //     case 6:
  //       this.passwordConfirm=e;
  //       break;
  //     case 7:
  //       this.address=e;
  //       break;
  //     default:
  //       this.agreeTerm=true;
  //       break;
  //   }
  // }
  // SubmitUser(){
   
  //   if(this.email==""){
  //     alert("Email cannot be empty");
  //   }else if(this.password==""){
  //     alert("Password cannot be empty")
  //   }else if(this.passwordConfirm==""){
  //     alert("Password confirm cannot be empty")
  //   }else if(this.phone==null){
  //     alert("Phone number cannot be empty")
  //   }else{
  //     if (this.password.trim() != this.passwordConfirm.trim()) {
  //       alert("Password confirm isn't correct")
  //     } else if (this.agreeTerm==false) {
  //       alert("You must agree to the term");
  //     }else{
  //       console.log("first name " + this.firstName);
  //       console.log("last name " + this.lastName);
  //       console.log("email " + this.email)
  //       console.log("Phone " + this.phone);
  //       console.log("password " + this.password);
  //       console.log("CF password " + this.passwordConfirm);
  //       console.log("Adrres " + this.address);
  //       this.apiServiceService.createAccount(this.firstName,this.lastName,this.email,this.phone,
  //         this.password,this.address).subscribe((res)=>{
  //           alert("Create account successfully");
  //         },(err)=>{
  //           alert("User already exist in system");
  //         })
  //     }
  //   }
  // }
}
