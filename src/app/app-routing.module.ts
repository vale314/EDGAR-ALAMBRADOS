import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { MallaCiclonicaComponent } from './pages/malla-ciclonica/malla-ciclonica.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'productos', component:ProductsComponent},
  { path: 'productos/ciclonica', component:MallaCiclonicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
