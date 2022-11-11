import { Router } from '@angular/router';
import { Player, Question } from './../../../../data/models/player.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss']
})
export class ShowQuestionComponent implements OnInit {
  questions: any[]=[];
  pregunta:Question={
    enum:"",
    r1:"",
    r2:"",
    r3:"",
    r4:"",
    correct:0
  }
  player!:Player;
  idPlayer:any;

  numeroPregunta:number=0;
  constructor(private _sharedService:SharedService,
    private router:Router) { }

  ngOnInit(): void {
    this.getQuestions();
    this.idPlayer=sessionStorage.getItem("id");
    this.obtenerJugador(this.idPlayer);
  }

  getQuestions(){
    this._sharedService.getAllQuestion("Games").subscribe(
      data=>{
        this.questions = [];
        data.forEach((element:any) => {
          this.questions.push({
            id:element.payload.doc.id,
            ...element.payload.doc.data()
          });
        });
        this.obtenerPregunta();
      }
    );
  }

  obtenerPregunta(){
    if(this.numeroPregunta < this.questions.length){
      this.pregunta=this.questions[this.numeroPregunta];
    }else if(this.numeroPregunta >= this.questions.length){
      this.router.navigate(['auth/endgame/']);
    }
    this.numeroPregunta++;
  }

  seleccionaPregunta(opcion:number){

    if(opcion == this.pregunta.correct){
      this._sharedService.mostrarVentana("Felicitaciones Respuesta correcta");
      this.aumentarScore(this.idPlayer,10000);
    }else{
      this._sharedService.mostrarVentana("Lo sentimos respuesta incorrecta");
      this.aumentarScore(this.idPlayer,600);
    }
    this.obtenerPregunta();
  }

  aumentarScore(id:string,score:number){
    this.player.score=this.player.score+score;
    this._sharedService.aumentarMarcador(id,this.player).then(
      ()=>{console.log("Se actualizo")}
    );
  }

  obtenerJugador(id:string){
    this._sharedService.obtenerJugador(id).subscribe(
      data=>{
        this.player=data.payload.data();
      }
    );
  }





}
