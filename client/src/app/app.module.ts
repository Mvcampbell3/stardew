import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { VillagersComponent } from './villagers/villagers.component';
import { MatchComponent } from './match/match.component';
import { HeaderComponent } from './header/header.component';
import { PersonComponent } from './components/person/person.component';
import { ProfileComponent } from './profile/profile.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    VillagersComponent,
    MatchComponent,
    HeaderComponent,
    PersonComponent,
    ProfileComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
