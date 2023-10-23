import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,   Validators.pattern(/^(.+)@(tut4life\.ac\.za|tut\.ac\.za)$/i)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    
    
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

  
}