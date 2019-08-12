import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnSolidComponent } from './LearnSolid/learn-solid.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { QuestionsComponent } from './Quiz/Questions/questions.component';
import { ResultsComponent } from './Quiz/Results/results.component';


const routes: Routes = [
  { path: 'LearnSOLID', component: LearnSolidComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Questions', component: QuestionsComponent},
  { path: 'Results', component: ResultsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent } //caminho absoluto (home)
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
