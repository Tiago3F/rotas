import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  constructor(private toastr: ToastrService){}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log(route)
    console.log(state)

    // if (state.url.includes('editar')) {
    //   this.toastr.error("Usuário não tem permissão!","Não é possível editar",{
    //     disableTimeOut: true,
    //     tapToDismiss: false,
    //     toastClass: "toast-icon custom-toast-error"
    //   });
    //   return false
    // }
    return true
  }

}
