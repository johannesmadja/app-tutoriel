import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{

  // Propriété du service 
  private albumService : AlbumService;

  // contructeur 
  constructor(albumService : AlbumService) {
    this.albumService = albumService;
  }

  // propriété pour la recherche 
  word !: string;

  // Propriété récupérant les albums résultant de la recherche
  albums !: Album[];

  // Propriété émettrice des résultats de rechercher vers le parent 
  @Output() search : EventEmitter<Album[]> = new EventEmitter();

  // A l'initialisation 
  ngOnInit() {}


  // Récupère l'élément de soumission au moment de la recherche 
  onSubmit(form : NgForm) {
    let value = form.value['word'];
    let album = this.albumService.getAlbums()
    album = this.albumService.search(value);
    console.log(album);
  }

  onChangeEmit($event : string) {
      this.albums = this.albumService.search($event);
      this.search.emit(this.albums);
  }

}
