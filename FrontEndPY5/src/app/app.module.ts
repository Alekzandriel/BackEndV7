
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from "primeng/inputswitch";
import {CalendarModule} from "primeng/calendar";
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";
import {MegaMenuModule } from 'primeng/megamenu';

import {CascadeSelectModule } from 'primeng/cascadeselect';

import {MenuComponent } from './menu/menu.component';
import {VotanteComponent } from './votantes/votante/votante.component';

import { CronogramaComponent } from './cronogramas/cronograma/cronograma.component';
import { CronogramaListaComponent } from './cronogramas/cronograma-lista/cronograma-lista.component';
import { AprobarComponent } from './aprobacion/aprobar/aprobar.component';
import { AprobarListaComponent } from './aprobacion/aprobar-lista/aprobar-lista.component';


import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import { VotanteListaComponent } from './votantes/votante-lista.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { UsuarioListaComponent } from './usuarios/usuario-lista/usuario-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VotanteComponent,
    VotanteListaComponent,
    CronogramaComponent,
    CronogramaListaComponent,
    AprobarComponent,
    AprobarListaComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioListaComponent,


    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MegaMenuModule, 

    ButtonModule,
    InputNumberModule,
    InputTextModule,
    InputSwitchModule,
    CalendarModule,
    PanelModule,
    TableModule,
    CascadeSelectModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
