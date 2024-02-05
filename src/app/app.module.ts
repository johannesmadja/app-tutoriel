import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';

// Définission de la constante pour les routes
const albumsRoutes : Routes = [
  {
    path : 'albums', 
    component : AlbumsComponent
  }, 
  {
    path : '', 
    redirectTo : '/albums', 
    pathMatch : 'full'
  }, 
  {
    path : 'login', 
    component : LoginComponent
  }, 
  {
    path : 'album/:id', 
    component : AlbumDescriptionComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    LoginComponent,
    AlbumDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    RouterModule.forRoot(albumsRoutes) //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
