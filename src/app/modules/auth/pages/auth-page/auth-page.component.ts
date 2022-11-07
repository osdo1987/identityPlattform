import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  usuario={
    email:'',
    password:''
  }

  constructor(
    private auth: AuthService,
    private router:Router
    ){}
  ngOnInit(): void {

  }
  userLogged = this.auth.obtenerGetuserLogged();
  ingresar(){
    const {email,password} = this.usuario;
    this.auth.login(email,password).then(
      res=>{ console.log("ingreso",res);
      this.router.navigate(['dashboard']);}
    );
  }
  registrar(){
    const {email,password} = this.usuario;
    this.auth.registrar(email,password).then(
      res=>{ console.log("registro",res);}
    );
   setTimeout(() => {
    this.resetPassword();
    }, 2000);
  }

  resetPassword(){
    const {email} = this.usuario;
    this.auth.resetPassword(email).then(
      res=>{ console.log("reset",res);}
    );
  }

  logOut(){
    this.auth.logout();
  }

}
