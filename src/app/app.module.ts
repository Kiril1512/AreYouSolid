import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnSolidComponent } from './LearnSolid/learn-solid.component';
import { QuestionsComponent } from './Quiz/Questions/questions.component';
import { ResultsComponent } from './Quiz/Results/results.component';
import { AnonymousComponent } from './Quiz/Results/Anonymous/anonymous.component';
import { CompetitiveComponent } from './Quiz/Results/Competitive/competitive.component';
import { DataComponent } from './Firebase/Data/data.component';
import { RegisterComponent } from './Firebase/Register/register.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { QuizComponent } from './Quiz/quiz.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnSolidComponent,
    QuestionsComponent,
    ResultsComponent,
    AnonymousComponent,
    CompetitiveComponent,
    DataComponent,
    RegisterComponent,
    QuizComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
