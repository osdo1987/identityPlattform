import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { SiginuserComponent } from './modules/user/pages/siginuser/siginuser.component';
import { CreateQuestionComponent } from './modules/question/pages/create-question/create-question.component';
import { ShowWinnersComponent } from './modules/user/pages/show-winners/show-winners.component';
import { HttpClientModule, } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SiginuserComponent,
    CreateQuestionComponent,
    ShowWinnersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
