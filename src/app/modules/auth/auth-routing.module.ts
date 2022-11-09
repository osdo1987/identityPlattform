import { ShowWinnersComponent } from './../user/pages/show-winners/show-winners.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginuserComponent } from '../user/pages/siginuser/siginuser.component';

const routes: Routes = [
  {path:'login',
    component:SiginuserComponent
  },
  {path:'players',
    component:ShowWinnersComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
