import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/data/models/player.model';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-load-question',
  templateUrl: './load-question.component.html',
  styleUrls: ['./load-question.component.scss']
})
export class LoadQuestionComponent implements OnInit {
  formQuestion:FormGroup= new FormGroup({});
  pregunta:Question={
    enum:"",
    r1:"",
    r2:"",
    r3:"",
    r4:"",
    correct:0

  }
  constructor(private _sharedService:SharedService) { }

  ngOnInit(): void {
    this.formQuestion = new FormGroup(
      {
        enumciado:new FormControl('',
          [Validators.required
          ]),
          ans1:new FormControl('',
          [Validators.required
          ]),
          ans2:new FormControl('',
          [Validators.required
          ]),
          ans3:new FormControl('',
          [Validators.required
          ]),
          ans4:new FormControl('',
          [Validators.required
          ]),
          ansTrue:new FormControl('',
          [Validators.required
          ])
      }
    );
  }

  newQuestion(){
   const {enumciado,ans1,ans2,ans3,ans4,ansTrue}=this.formQuestion.value;
   this.pregunta.enum=enumciado;
   this.pregunta.r1=ans1;
   this.pregunta.r2=ans2;
   this.pregunta.r3=ans3;
   this.pregunta.r4=ans4;
   this.pregunta.correct=ansTrue;

   this._sharedService.addQuestion(this.pregunta,"Games").then(
    ()=>{
      console.log("ok osdito creaste una pregunta");
      this.formQuestion.reset();
       });

  }

}
