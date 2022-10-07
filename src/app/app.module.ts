import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/home/main.component';
import { HeaderComponent } from './components/parts-sites/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './pages/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
