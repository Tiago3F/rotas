import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false



  constructor(private router: Router, private toastr: ToastrService) { }

  fazerLogin(usuario: Usuario){
    if (usuario.nome === 'tiago@gmail.com' && usuario.senha === '123') {
        this.usuarioAutenticado = true
        this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false
      this.toastr.error("Usuário ou senha incorretos!","Não é possível logar",{
        disableTimeOut: true,
        tapToDismiss: false,
        toastClass: "toast-icon custom-toast-error"
      });
    }
  }
}
