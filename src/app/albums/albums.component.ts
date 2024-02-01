import { Component, OnInit } from '@angular/core';
import { Album } from "../album";
import { ALBUMS } from "../mock-albums";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent  implements OnInit {

  // Titre de la page 
  titlePage : string = "Fil rouge 🔥";
  // Les albums 
  albums : Album[] = ALBUMS;
  // Reçois l'album sélectionné 
  selectedAlbum !: Album;
  // Album en cours de lecture 
  albumloading !: Album;

  ngOnInit(): void {
      // Nothing
  }

  // Récupère l'identifiant de l'album selectionné
  onSelect(album : Album) : void {
    this.selectedAlbum = album;
  }

  // Récupération de l'album émit par l'enfant 
  albumPlaying(album : Album) {
    this.albumloading = album;
    
  }
}
