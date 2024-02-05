import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from "../album";
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css']
})
export class AlbumDescriptionComponent implements OnInit{

  // Propritété d'un album 
  album !: Album | undefined; 

  // Constructeur 
  constructor (
    private route : ActivatedRoute, 
    private albumService : AlbumService
  ) {}

  // A l'initialisation 
  ngOnInit(): void {
      // Récupération de l'idenifiant de l'album
      const id = this.route.snapshot.paramMap.get('id');
      // Récupération des détails d'un album 
      if (id) {
        this.album = this.albumService.getAlbum(id);   
      }
      
  }


}
