import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  get txtEmail() {
    return this.registerForm.get('txtEmail')
  }

  get txtPassword() {
    return this.registerForm.get('txtPassword')
  }

  registerForm = this.formBuilder.group({
    txtEmail: ['', [Validators.required, Validators.email]],
    txtPassword: ['', [Validators.required, Validators.minLength(10)]],
  });

  ngOnInit(): void {
  }

  submit() {
    console.log(this.registerForm.value);
  }

}
