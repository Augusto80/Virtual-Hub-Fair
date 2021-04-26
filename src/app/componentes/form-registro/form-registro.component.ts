import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidacionesPropias } from '../class/validaciones-propias';


@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

 
  get Url() {
    return this.registerForm.get('Url')
  }
  get Foto() {
    return this.registerForm.get('Foto')
  }
  get Logo() {
    return this.registerForm.get('Logo')
  }
  get NombreEmpresa() {
    return this.registerForm.get('NombreEmpresa')
  }
  get Correo() {
    return this.registerForm.get('Correo')
  }
  get Direccion() {
    return this.registerForm.get('Direccion')
  }
  get Telefono() {
    return this.registerForm.get('Telefono')
  }

  registerForm = this.formBuilder.group({
    Url: ['', [Validators.required, Validators.minLength(7)]],
    Foto: ['', [Validators.required]],
    Logo: ['', [Validators.required]],
    NombreEmpresa: ['', [Validators.required, Validators.minLength(5)]],
    Correo: ['', [Validators.required,Validators.email]],
    Direccion: ['', [Validators.required, Validators.minLength(5)]],
    Telefono: ['', [ValidacionesPropias.mayor0,Validators.required, Validators.maxLength(10), Validators.minLength(7), Validators.pattern(/^[1-9]\d{6,10}$/)]],
  });

  ngOnInit() {
  }


  submit() {
    console.log(this.registerForm.value);
    alert(this.registerForm.value); 
  }

  boton() {
    alert("Hola mundo"); 
  }

  
}
