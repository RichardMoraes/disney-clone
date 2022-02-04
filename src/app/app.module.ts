import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CarouselModule} from 'primeng/carousel';

import { HomeComponent } from './app-template/views/home/home.component';
import { HomeRoutingModule } from './app-template/views/home/home.routing.module';
import { TopbarComponent } from './app-template/components/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
