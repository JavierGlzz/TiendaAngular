import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { CarroComponent } from './carro/carro.component';



const routes: Routes = [{ path: 'tienda', component: TiendaComponent }, { path: 'carro', component: CarroComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
