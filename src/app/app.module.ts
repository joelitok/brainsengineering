import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Error404Component } from './error404/error404.component';
import { OutTeamComponent } from './out-team/out-team.component';
import { ServicesComponent } from './services/services.component';
import { FormationComponent } from './formation/formation.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    Error404Component,
    OutTeamComponent,
    ServicesComponent,
    FormationComponent,
    BlogComponent,
  
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
