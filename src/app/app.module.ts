import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule } from '@angular/forms';
import * as $ from '../assets/js/core/jquery.min.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharingComponent } from './components/sharing/sharing.component';
import { CarouselAboutComponent } from './components/carousel-about/carousel-about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CardMaterialsComponent } from './components/card-materials/card-materials.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SharingComponent,
    CarouselAboutComponent,
    ContactUsComponent,
    AboutUsComponent,
    CardMaterialsComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NouisliderModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
