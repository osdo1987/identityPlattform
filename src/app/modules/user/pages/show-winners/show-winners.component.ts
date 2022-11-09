import { Player } from './../../../../data/models/player.model';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-winners',
  templateUrl: './show-winners.component.html',
  styleUrls: ['./show-winners.component.scss']
})
export class ShowWinnersComponent implements OnInit {

  players: any[]=[];
  constructor(private _sharedService:SharedService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(){
    this.players = [];
    this._sharedService.getAllPlayers("Games").subscribe(
      data=>{
        data.forEach((element:any) => {
          this.players.push({
            id:element.payload.doc.id,
            ...element.payload.doc.data()
          });
        });
        console.log(this.players);
      }
    );
  }

}
