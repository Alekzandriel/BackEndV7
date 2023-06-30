import { LoginRequest } from './../../services/auth/loginRequest';
import { LoginService } from 'src/app/services/auth/login.service';
import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

    loginError:string='';
    loginForm=this.formBuilder.group({
    email:['admin@gmail.com',[Validators.required,Validators.email]],
    password:['123',Validators.required],
  })
  constructor(private formBuilder:FormBuilder, private router:Router,private loginService:LoginService){}

  ngonInit():void{

  }

  get email(){
    return this.loginForm.controls.email;
  }
  get password(){
    return this.loginForm.controls.password;
  }

  login(){
    if (this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.log(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.log("login completo");
          this.router.navigateByUrl('/menu')
          this.loginForm.reset();
        }
      });
     

    } else {
      this.loginForm.markAsTouched();
      alert("error de datos ");
    }
  }
 

  
}
