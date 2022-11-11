import { Player } from './../../../../data/models/player.model';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-winners',
  templateUrl: './show-winners.component.html',
  styleUrls: ['./show-winners.component.scss']
})
export class ShowWinnersComponent implements OnInit {

  players: any[]=[];
  constructor(private _sharedService:SharedService,
    private router:Router) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(){
let osdo=0;
    this._sharedService.getAllPlayers("Games").subscribe(
      data=>{
        osdo++;
        this.players = [];
        data.forEach((element:any) => {
          this.players.push({
            id:element.payload.doc.id,
            ...element.payload.doc.data()
          });
        });

        if(this.players[0].id){
          this.router.navigate(['auth/question']);
        }
        console.log(this.players);
      }
    );
  }

}
