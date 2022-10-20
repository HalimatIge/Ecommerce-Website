import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceService } from '../myservice.service';

@Injectable({
  providedIn: 'root'
})
export class IsloggedGuard implements CanActivate {
 constructor(private serve:MyserviceService, private routr:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // let log= localStorage.getItem('islogged')
      if (this.serve.guard) {
return true;
      }
      this.routr.navigate(['/'])
    return false;
  }

}
