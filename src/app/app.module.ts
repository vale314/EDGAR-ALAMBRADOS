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
import { SafePipe } from './pages/home/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharingComponent } from './components/sharing/sharing.component';
import { CarouselAboutComponent } from './components/carousel-about/carousel-about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CardMaterialsComponent } from './components/card-materials/card-materials.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FeaturesComponent } from './components/features/features.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { ProductsComponent } from './pages/products/products.component';
import { CardAllProductsComponent } from './components/card-all-products/card-all-products.component';
import { MallaCiclonicaComponent } from './pages/malla-ciclonica/malla-ciclonica.component';
import { HeaderCiclonicaComponent } from './pages/malla-ciclonica/components/header-ciclonica/header-ciclonica.component';
import { BodyCiclonicaComponent } from './pages/malla-ciclonica/components/body-ciclonica/body-ciclonica.component';
import { PriceComponent } from './components/price/price.component';
import { PriceCiclonicaComponent } from './pages/malla-ciclonica/components/price-ciclonica/price-ciclonica.component.js';
import { MallaConcertinaComponent } from './pages/malla-concertina/malla-concertina.component';
import { HeaderConcertinaComponent } from './pages/malla-concertina/components/header-concertina/header-concertina.component';
import { BodyConcertinaComponent } from './pages/malla-concertina/components/body-concertina/body-concertina.component';
import { PriceConcertinaComponent } from './pages/malla-concertina/components/price-concertina/price-concertina.component';
import { MallaSeguridadComponent } from './pages/malla-seguridad/malla-seguridad.component';
import { HeaderSeguridadComponent } from './pages/malla-seguridad/components/header-seguridad/header-seguridad.component';
import { BodySeguridadComponent } from './pages/malla-seguridad/components/body-seguridad/body-seguridad.component';
import { PriceSeguridadComponent } from './pages/malla-seguridad/components/price-seguridad/price-seguridad.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { BodyAboutComponent } from './pages/about-us-page/components/body-about/body-about.component';
import {HeaderAboutComponent} from './pages/about-us-page/components/header-about/header-about.component';
import { VisionComponent } from './pages/vision/vision.component'

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
    FeaturesComponent,
    CardProductsComponent,
    ProductsComponent,
    CardAllProductsComponent,
    MallaCiclonicaComponent,
    HeaderCiclonicaComponent,
    BodyCiclonicaComponent,
    PriceCiclonicaComponent,
    PriceComponent,
    MallaConcertinaComponent,
    HeaderConcertinaComponent,
    BodyConcertinaComponent,
    PriceConcertinaComponent,
    MallaSeguridadComponent,
    HeaderSeguridadComponent,
    BodySeguridadComponent,
    PriceSeguridadComponent,
    AboutUsPageComponent,
    BodyAboutComponent,
    HeaderAboutComponent,
    VisionComponent,
    SafePipe
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
