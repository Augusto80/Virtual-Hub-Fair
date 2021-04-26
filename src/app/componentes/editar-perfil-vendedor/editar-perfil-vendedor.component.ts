import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { ValidacionesPropias } from '../class/validaciones-propias';
import {ClientesService} from '../../services/clientes.service'; 
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-perfil-vendedor',
  templateUrl: './editar-perfil-vendedor.component.html',
  styleUrls: ['./editar-perfil-vendedor.component.css']
})
export class EditarPerfilVendedorComponent implements OnInit {

  clientes = null; 

  cliente = {
    nombres:null,
    apellidos:null,
    nombreempresa:null,
    pais: null,
    nitempresa:null,
    sectorinteres:null,
    correo:null,
    clave:null,
    perfil:null
  }

  constructor(private formBuilder: FormBuilder, private clientesServicio:ClientesService) { }

  paises: any = ['Argentina', 'Colombia', 'Panama', 'Paraguay']
  sectores: any = ['Agropecuario', 'Servicios', 'Industrial', 'Industria 4.0', 'Textil o Moda', 'Transporte', 'Comercio', 'Financiero', 'Construcción', 'Minero y Energético', 'TeleComunicaciones',]

  changepaises(e) {
    console.log(e.value)
    this.txtPais.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changesectores(e) {
    console.log(e.value)
    this.txtAreaInteres.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get txtNombresRepresentante() {
    return this.registerForm.get('txtNombresRepresentante')
  }

  get txtApellidosRepresentante() {
    return this.registerForm.get('txtApellidosRepresentante')
  }

  get txtNombreEmpresa() {
    return this.registerForm.get('txtNombreEmpresa')
  }

  get txtPais() {
    return this.registerForm.get('txtPais')
  }

  get txtNitEmpresa() {
    return this.registerForm.get('txtNitEmpresa')
  }

  get txtAreaInteres() {
    return this.registerForm.get('txtAreaInteres')
  }

  get txtEmail() {
    return this.registerForm.get('txtEmail')
  }

  get txtPassword() {
    return this.registerForm.get('txtPassword')
  }

  get txtPerfil() {
    return this.registerForm.get('txtPerfil')
  }

  get txtTerminosCondiciones() {
    return this.registerForm.get('txtTerminosCondiciones')
  }

  registerForm = this.formBuilder.group({

    txtNombresRepresentante: ['', [Validators.required, Validators.minLength(3)]],
    txtApellidosRepresentante: ['', [Validators.required, Validators.minLength(3)]],
    txtNombreEmpresa: ['', [Validators.required, Validators.minLength(6)]],
    txtPais: ['', [Validators.required]],
    txtNitEmpresa: ['', [ValidacionesPropias.mayor0, Validators.required, Validators.maxLength(11), Validators.minLength(7), Validators.pattern(/^[1-9]\d{6,10}$/)]],
    txtAreaInteres: ['', [Validators.required]],
    txtEmail: ['', [Validators.required, Validators.email]],
    txtPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  submit() {
    console.log(this.registerForm.value);
  }

  ngOnInit(): void {
  }

}

