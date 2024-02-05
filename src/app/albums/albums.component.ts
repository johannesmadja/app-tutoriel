import { Component, OnInit } from '@angular/core';
import { Album } from "../album";
import { ALBUMS } from "../mock-albums";
import { AlbumService } from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent  implements OnInit {

  private albumService : AlbumService;

  constructor (albumService : AlbumService) {
    this.albumService = albumService;
  }
  // Les albums 
  albums !: Album[] 
  // Reçois l'album sélectionné 
  selectedAlbum !: Album;
  // Album en cours de lecture 
  albumloading !: Album;
  

  ngOnInit(): void {
    this.albums = this.albumService.paginate(0, 10);
  }

  // Récupère l'identifiant de l'album selectionné
  onSelect(album : Album) : void {
    this.selectedAlbum = album;
  }

  // Récupération de l'album émit par l'enfant 
  albumPlaying(album : Album) {
    this.albumloading = album;
    
  }

  // Retourne le nombre total d'album 
  count() : number {
    return this.albumService.getAlbums().length;
  }

  // Récupération des albums résultant de la recherche
  albumSearched(albums : Album[]) {
    this.albums = albums;
  }
}
