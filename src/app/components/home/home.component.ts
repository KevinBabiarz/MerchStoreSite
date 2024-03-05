import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {PasswordModule} from "primeng/password";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PasswordModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  loginForm:FormGroup;

  constructor(private _authServ:AuthService,private _fb : FormBuilder,private _router:Router) {
    this.loginForm = this._fb.group({
      email : [null,[Validators.required]],
      password : [null,[Validators.required]]
    });
  }

  login(){

    if (this.loginForm.valid){
      this._authServ.login(this.loginForm.value).subscribe({
        next: (result) => {
          // console.log(result)
          this._router.navigateByUrl("/panel")}

      });
    }
    else{
      this.loginForm.markAllAsTouched()
    }
  }

}
