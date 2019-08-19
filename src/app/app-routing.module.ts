import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LearnSolidComponent } from './Pages/LearnSolid/learn-solid.component';
import { HomeComponent } from './Pages/Home/home.component';
import { AboutComponent } from './Pages/About/about.component';
import { QuestionsComponent } from './Pages/Quiz/Questions/questions.component';
import { ResultsComponent } from './Pages/Quiz/Results/results.component';
import { AuthGuardService } from './Firebase/Auth/auth-guard.service';


const routes: Routes = [
  { path: 'LearnSOLID', component: LearnSolidComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Questions', component: QuestionsComponent, canActivate: [AuthGuardService]},
  { path: 'Results', component: ResultsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent } //caminho absoluto (home)
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
