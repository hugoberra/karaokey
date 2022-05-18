import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavComponent } from './body/nav/nav.component';
import { FooterComponent } from './body/footer/footer.component';
import { KaraokeComponent } from './karaoke/karaoke/karaoke.component';
import { ModalidadComponent } from './karaoke/modalidad/modalidad.component';
import { CrudplaylistComponent } from './playlist/crudplaylist/crudplaylist.component';
import { InfoplaylistComponent } from './playlist/infoplaylist/infoplaylist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParticipantesComponent } from './karaoke/participantes/participantes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    FooterComponent,
    KaraokeComponent,
    ModalidadComponent,
    CrudplaylistComponent,
    InfoplaylistComponent,
    ParticipantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
