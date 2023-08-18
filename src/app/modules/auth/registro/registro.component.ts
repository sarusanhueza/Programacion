import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  hide = true; //input de contraseña

constructor (public servicioAuth: AuthService){}

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    contrasena: '' }


  //tomando nuevo registro
  async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
    .then(res =>{
      alert("Ha agregado un nuevo usuario: ")
    })

    console.log(res)
  }
}
