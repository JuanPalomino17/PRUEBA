import { SharedModule } from './components/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



import { LoginComponent } from './components/login/login.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import { InicioComponent } from './components/dasboard/inicio/inicio.component';
import { NavbarComponent } from './components/dasboard/navbar/navbar.component';
import { UsuariosComponent } from './components/dasboard/usuarios/usuarios.component';
import { ReportesComponent } from './components/dasboard/reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DasboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
