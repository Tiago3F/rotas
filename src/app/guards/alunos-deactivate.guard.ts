import { IFormCandeactivate } from './iforms-candeactivate';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCandeactivate> {
  canDeactivate(
    component: IFormCandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('guarda de desativação!')

    return component.podeDesativar()

    // return component.podeMudarRota()
  }
}
