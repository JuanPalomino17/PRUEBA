import { ReportesComponent } from './../../dasboard/reportes/reportes.component';
import { UsuariosComponent } from './../../dasboard/usuarios/usuarios.component';
import { InicioComponent } from './../../dasboard/inicio/inicio.component';
import { DasboardComponent } from './../../dasboard/dasboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', component: DasboardComponent, children:[
    {path: '', component: InicioComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'reportes', component: ReportesComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DasboardRoutingModule { }
