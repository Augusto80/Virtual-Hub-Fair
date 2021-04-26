import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { Paises } from 'src/app/models/paises.enum';
import { ClientesService } from '../../services/clientes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-perfil-registro-visitante',
  templateUrl: './perfil-registro-visitante.component.html',
  styleUrls: ['./perfil-registro-visitante.component.css']
})

export class PerfilRegistroVisitanteComponent implements OnInit {

  title = 'sweetalert2';
  clientes = null;

  cliente = {
    nombres: null,
    apellidos: null,
    nombreempresa: null,
    pais: null,
    nitempresa: null,
    sectorinteres: null,
    correo: null,
    clave: null,
    perfil: null
  }

  constructor(private formBuilder: FormBuilder, private clientesServicio: ClientesService) { }

  paises: any = ['Argentina', 'Colombia', 'Panama', 'Paraguay']
  sectores: any = ['Agropecuario', 'Servicios', 'Industrial', 'Industria 4.0', 'Textil o Moda', 'Transporte', 'Comercio', 'Financiero', 'Construcción', 'Minero y Energético', 'TeleComunicaciones',]
  perfiles: any = ['Visitante']

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

  changeperfiles(e) {
    console.log(e.value)
    this.txtPerfil.setValue(e.target.value, {
      onlySelf: true
    })
  }

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clientesServicio.obtenerClientes().subscribe(
      result => this.clientes = result
    );
  }

  altaClientes() {
    this.clientesServicio.altaClientes(this.cliente).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          Swal.fire({
            text: datos['mensaje'],
            titleText: 'Verifica tu correo para confirmar cuenta',
            icon: 'success',
            showConfirmButton: false,
            timer: 5000
          }
          );
          //alert(datos['mensaje']);
          this.obtenerClientes();


        }
      }
    );
  }

  get txtNombresRepresentante() {
    return this.registerForm.get('txtNombresRepresentante')
  }

  get txtApellidosRepresentante() {
    return this.registerForm.get('txtApellidosRepresentante')
  }

  get txtPais() {
    return this.registerForm.get('txtPais')
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
    txtPais: ['', [Validators.required]],
    txtAreaInteres: ['', [Validators.required]],
    txtEmail: ['', [Validators.required, Validators.email]],
    txtPassword: ['', [Validators.required, Validators.minLength(6)]],
    txtPerfil: ['', [Validators.required]],
    txtTerminosCondiciones: ['', [Validators.required]]
  });

  submit() {
    console.log(this.registerForm.value);
  }
}
