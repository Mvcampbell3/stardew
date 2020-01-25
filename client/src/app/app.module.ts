import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { VillagersComponent } from './villagers/villagers.component';
import { MatchComponent } from './match/match.component';
import { HeaderComponent } from './header/header.component';
import { PersonComponent } from './components/person/person.component';
import { ProfileComponent } from './profile/profile.component';
import { GuideComponent } from './guide/guide.component';
import { GiftsComponent } from './gifts/gifts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestmatComponent } from './testmat/testmat.component';
import { NavTestComponent } from './nav-test/nav-test.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    VillagersComponent,
    MatchComponent,
    HeaderComponent,
    PersonComponent,
    ProfileComponent,
    GuideComponent,
    GiftsComponent,
    TestmatComponent,
    NavTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
