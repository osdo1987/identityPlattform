import { Injectable } from '@angular/core';
import { loggedIn } from '@angular/fire/auth-guard';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor( private auth:AngularFireAuth,
      private router:Router){}
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.user.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn=>{
        if(!loggedIn){
          this.router.navigate(['auth']);
        }
      })
    );
  }
}
