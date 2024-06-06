import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommitteeMembersComponent } from './committee-members/committee-members.component';
import { TrusteesComponent } from './trustees/trustees.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleAdComponent } from './google-ad/google-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommitteeMembersComponent,
    TrusteesComponent,
    AboutUsComponent,
    LanguageSelectorComponent,
    HeaderComponent,
    FooterComponent,
    GoogleAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
