import { ShowWinnersComponent } from './../user/pages/show-winners/show-winners.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginuserComponent } from '../user/pages/siginuser/siginuser.component';
import { ShowQuestionComponent } from '../question/pages/show-question/show-question.component';
import { LoadQuestionComponent } from '../question/pages/load-question/load-question.component';
import { CreateQuestionComponent } from '../question/pages/create-question/create-question.component';

const routes: Routes = [
  {path:'login',
    component:SiginuserComponent
  },
  {path:'players',
    component:ShowWinnersComponent
  },
  {path:'question',
    component:ShowQuestionComponent
  },
  {path:'loadquestion',
    component:LoadQuestionComponent
  },
  {path:'endgame',
    component:CreateQuestionComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
