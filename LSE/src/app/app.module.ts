import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; 


import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { VideoComponent } from './video/video.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/galeria', pathMatch: 'full'},
  {path: 'galeria', component:GaleriaComponent},
  {path: 'video', component:VideoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    VideoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
