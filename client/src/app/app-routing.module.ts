import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { VillagersComponent } from './villagers/villagers.component';
import { MatchComponent } from './match/match.component';
import { GuideComponent } from './guide/guide.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'villagers', component: VillagersComponent },
  { path: 'match', component: MatchComponent },
  { path: 'guide', component: GuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
