import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnSolidComponent } from './Pages/LearnSolid/learn-solid.component';
import { QuestionsComponent } from './Pages/Quiz/Questions/questions.component';
import { ResultsComponent } from './Pages/Quiz/Results/results.component';
import { DataService } from './Firebase/Data/data.service';
import { RegisterComponent } from './Pages/Quiz/Register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './Pages/Home/home.component';
import { AboutComponent } from './Pages/About/about.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatSelectModule, MatSortModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HighlightModule } from 'ngx-highlightjs';
import { MatTableModule } from '@angular/material/table';
import xml from 'highlight.js/lib/languages/xml';
import csp from 'highlight.js/lib/languages/csp';
import typescript from 'highlight.js/lib/languages/typescript';
import { HttpClientModule } from '@angular/common/http';
import { PointsService } from './Shared/Points/points.service';
import { MatPaginatorModule } from '@angular/material/paginator';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { AuthGuardService } from './Firebase/Auth/auth-guard.service';
import { AuthService } from './Firebase/Auth/auth.service';

const firebaseConfig = {
  apiKey: "AIzaSyCSCJKzZGfkOObEU39jjx4halHdDiFkyrg",
  authDomain: "areyousolid-8494d.firebaseapp.com",
  databaseURL: "https://areyousolid-8494d.firebaseio.com",
  projectId: "areyousolid-8494d",
  storageBucket: "",
  messagingSenderId: "640030276152",
  appId: "1:640030276152:web:e8ec268ab01d699b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'csp', func: csp }, //c#
    { name: 'xml', func: xml }
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    LearnSolidComponent,
    QuestionsComponent,
    ResultsComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    HttpClientModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [PointsService, DataService, RegisterComponent, ResultsComponent, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
