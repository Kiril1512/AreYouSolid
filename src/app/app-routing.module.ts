import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnSolidComponent } from './LearnSolid/learn-solid.component';
import { QuizComponent } from './Quiz/quiz.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';


const routes: Routes = [
  { path: 'LearnSOLID', component: LearnSolidComponent },
  { path: 'Quiz', component: QuizComponent },
  { path: 'About', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent } //caminho absoluto (home)
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
