import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MiComponente } from './components/mi-componente/mi-componente.component';
import { HeaderComponent } from './components/Header/header/header.component';
import { LogoAPComponent } from './src/app/components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
