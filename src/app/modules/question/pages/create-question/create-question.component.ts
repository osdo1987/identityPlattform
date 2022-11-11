import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

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
