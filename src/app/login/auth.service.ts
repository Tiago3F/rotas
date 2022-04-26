import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false
  mostrarMenuEmmiter = new EventEmitter<boolean>()

  constructor(private router: Router, private toastr: ToastrService) { }

  fazerLogin(usuario: Usuario){
    if (usuario.nome === 'tiago@gmail.com' && usuario.senha === '123') {
        this.usuarioAutenticado = true
        this.router.navigate(['/'])
        this.mostrarMenuEmmiter.emit(true)
    } else {
      this.usuarioAutenticado = false
      this.mostrarMenuEmmiter.emit(false)

      this.toastr.error("Usuário ou senha incorretos!","Não é possível logar",{
        disableTimeOut: true,
        tapToDismiss: false,
        toastClass: "toast-icon custom-toast-error"
      });
    }
  }
}
