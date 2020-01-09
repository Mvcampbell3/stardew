import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { VillagersComponent } from './villagers/villagers.component';
import { CropsComponent } from './crops/crops.component';
import { MatchComponent } from './match/match.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'villagers', component: VillagersComponent },
  { path: 'crops', component: CropsComponent },
  { path: 'match', component: MatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
