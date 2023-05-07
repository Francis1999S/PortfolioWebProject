import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MiComponente } from './components/mi-componente/mi-componente.component';
import { HeaderComponent } from './components/Header/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
