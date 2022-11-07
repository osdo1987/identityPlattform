import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) {

   }

   async login(email:string , password:string){
    try {
      return await this.auth.signInWithEmailAndPassword(email,password);
    } catch (error) {
      console.log(error);
      return null;
    }
   }

   async registrar(email:string , password:string){
    try {
      return await this.auth.createUserWithEmailAndPassword(email,password);
    } catch (error) {
      return null;
      console.log(error);
    }
   }

   async resetPassword(email:string){
    try {
      console.log('resetpassword');
      return await this.auth.sendPasswordResetEmail(email);
    } catch (error) {
      return null;
      console.log(error);
    }
   }

   async sendEmail(email:string){
    try {
      console.log('resetpassword');
      return (await this.auth.currentUser);
    } catch (error) {
      return null;
      console.log(error);
    }
   }

   async loginPopup(){
    try {
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error);
      return null;
    }
   }

   obtenerGetuserLogged(){
    return this.auth.authState;
   }

   logout(){
    this.auth.signOut();
   }
}
