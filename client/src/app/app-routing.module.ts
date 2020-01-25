import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { VillagersComponent } from './villagers/villagers.component';
import { MatchComponent } from './match/match.component';
import { GuideComponent } from './guide/guide.component';
import { GiftsComponent } from './gifts/gifts.component';
import { TestmatComponent } from './testmat/testmat.component';


const routes: Routes = [
  { path: '', component: TestmatComponent },
  { path: 'villagers', component: VillagersComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'match', component: MatchComponent },
  { path: 'guide', component: GuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
