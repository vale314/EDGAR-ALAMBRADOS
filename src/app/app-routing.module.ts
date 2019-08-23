import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { MallaCiclonicaComponent } from './pages/malla-ciclonica/malla-ciclonica.component';
import { MallaConcertinaComponent } from './pages/malla-concertina/malla-concertina.component';
import { MallaSeguridadComponent } from './pages/malla-seguridad/malla-seguridad.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { VisionComponent } from './pages/vision/vision.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'productos', component:ProductsComponent},
  { path: 'productos/ciclonica', component:MallaCiclonicaComponent},
  { path: 'productos/concertina', component:MallaConcertinaComponent},
  { path: 'productos/alta-seguridad', component:MallaSeguridadComponent},
  { path: 'nosotros', component:AboutUsPageComponent},
  {path: 'vision', component:VisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
