import { Router } from '@angular/router';
import { Question } from './../../../../data/models/player.model';
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

  numeroPregunta:number=0;
  constructor(private _sharedService:SharedService,
    private router:Router) { }

  ngOnInit(): void {
    this.getQuestions();
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
      this.router.navigate(['auth/players']);
    }
    console.log(this.questions);
    console.log(this.pregunta)
    this.numeroPregunta++;
  }
  seleccionaPregunta(opcion:number){

    if(opcion == this.pregunta.correct){
      console.log("felicitaciones")
    }else{
      console.log("lo sentimos erraste")
    }
    this.obtenerPregunta();
  }

}
