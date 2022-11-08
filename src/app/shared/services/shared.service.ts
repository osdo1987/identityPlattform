import { Player } from './../../data/models/player.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  baseUrl: string = environment.baseUrl;

  constructor(private afs: AngularFirestore,
    private http:HttpClient ) {

  }
  addPlayer(player: Player,collection:any) :Promise<any>{
    return this.afs.collection(collection).doc("1").collection("Players").add(player);
  }

  getUrlPokemon(index:number){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}