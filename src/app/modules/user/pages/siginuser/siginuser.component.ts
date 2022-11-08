import { Player } from './../../../../data/models/player.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-siginuser',
  templateUrl: './siginuser.component.html',
  styleUrls: ['./siginuser.component.scss']
})
export class SiginuserComponent implements OnInit {

  player:Player={
    username:"",
    urlImg:"",
    score:0
  }

  urlImg:any;





  constructor(private _sharedService:SharedService) { }

  ngOnInit(): void {
    //this.newPlayer();
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;

    let i=  Math.floor(Math.random() * (150 - 1) + 1);
      this._sharedService.getUrlPokemon(i).subscribe(
        res => {
            this.urlImg= res.sprites.front_default;

          //se puede hacer un filter en el servicio para que solo nos devuleva la url de la imagen

          console.log(this.urlImg);
        },
        err => {
          console.log(err);
        }
      );
  }


  newPlayer(){
    this._sharedService.addPlayer(this.player,"Games").then(
      ()=>{
        console.log("ok osdito");
      }
    );
  }

}
