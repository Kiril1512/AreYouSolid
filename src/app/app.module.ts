import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnSolidComponent } from './LearnSolid/learn-solid.component';
import { QuestionsComponent } from './Quiz/Questions/questions.component';
import { ResultsComponent } from './Quiz/Results/results.component';
import { AnonymousComponent } from './Quiz/Results/Anonymous/anonymous.component';
import { DataComponent } from './Firebase/Data/data.component';
import { RegisterComponent } from './Firebase/Register/register.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';

import { HighlightModule } from 'ngx-highlightjs';
 
import xml from 'highlight.js/lib/languages/xml';
import csp from 'highlight.js/lib/languages/csp';
import typescript from 'highlight.js/lib/languages/typescript';
import { HttpClientModule } from '@angular/common/http';
import { PointsService } from './Quiz/Points/points.service';
 
/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'csp', func: csp},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    LearnSolidComponent,
    QuestionsComponent,
    ResultsComponent,
    AnonymousComponent,
    DataComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
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
    HttpClientModule
  ],
  providers: [PointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
