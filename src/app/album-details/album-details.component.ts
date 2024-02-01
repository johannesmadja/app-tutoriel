import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { Album, List } from '../album';
import { ALBUM_LISTS } from '../mock-albums';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit, OnChanges {
  
  // Propriété réceptrice
  @Input() album !: Album;
  
  // Liste des albums 
  albumList : List[] = ALBUM_LISTS;
  albumDetails !: string[] | undefined; // Détails des albums à afficher 

  // Propriété émétrice 
  @Output() onPlay : EventEmitter<Album> = new EventEmitter();

  // Variable boolean conditionnant l'affichage des détails d'album
  hideDetails : boolean = false;


  //A l'initialisation 
  ngOnInit(): void {
    // Nothing
    console.log(this.album);
    
  }

  // Changement dans le composant 
  ngOnChanges(): void {
      if (this.album) {
        this.albumDetails = this.albumList.find((list) => list.id === this.album.id)?.list;
      }
  }

  // Au clic du bouton play 
  play(album : Album) {
    this.onPlay.emit(album);
  }

}
