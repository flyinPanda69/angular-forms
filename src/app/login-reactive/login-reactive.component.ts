import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength-validator';


@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

    // Email =new FormControl('', {
    //                               validators:[Validators.required,Validators.email], 
    //                               updateOn:'blur'
    //                             });
    // Password = new FormControl('',{
    //                               validators:[Validators.required, Validators.minLength(10), createPasswordStrengthValidator()],
    //                             });


  // form =new FormGroup({
  //   email:this.Email,
  //   password: this.Password
  // });

  form = this.formbuilder.group({
    email: ['',{
      validators: [Validators.required, Validators.email],
      updateOn:'blur'
    }],
    password:['',[Validators.required, Validators.minLength(10), createPasswordStrengthValidator]]
  });
  
  constructor(private formbuilder: FormBuilder) {
    //We can also define the formcontrol configuration here in constructor.
  }

  ngOnInit() {

  }

  get email(){
    return this.form.controls['email'];
  }
  get password(){
    return this.form.controls['password'];
  }

}
