import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-olvido-clave',
  templateUrl: './olvido-clave.component.html',
  styleUrls: ['./olvido-clave.component.css']
})
export class OlvidoClaveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  get txtEmail() {
    return this.registerForm.get('txtEmail')
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
