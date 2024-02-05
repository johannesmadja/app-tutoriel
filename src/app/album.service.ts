import { Injectable } from '@angular/core';
import { Album, List } from './album';
import { ALBUMS, ALBUM_LISTS } from "./mock-albums";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  // propriété contenant tous les albums
  albums : Album[] = ALBUMS;

  // propriété contenant les liste liées aux albums 
  albumList : List[] = ALBUM_LISTS;

  // Récupère tous les albums 
  getAlbums() : Album[] {
    return this.albums = this.albums.sort((a , b) => a.duration - b.duration); 
  }

  // Récupère un album par son identifiant 
  getAlbum(id : string) : Album | undefined {
    return this.albums.find(album => album.id === id);
  }

  // récupère la liste liée à un album 
  getAlbumList(id : string) : string[] | undefined {
    return this.albumList.find(list => list.id === id)?.list;
  }

  // Retourne les albums par pagination 
  paginate(start : number, end : number) : Album[] {
    return this.albums.slice(start, end);
  }

  // Méthode de recherche d'album 
  search(value : string) : Album[] {
    return this.albums.filter((album) => album.name.toLowerCase().includes(value.toLowerCase().trim()))
    
  }
}
