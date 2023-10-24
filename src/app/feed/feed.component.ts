import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  characters: any[] = [];

  constructor(private rickAndMortyService: RickapiService) {}

  ngOnInit() {
    this.rickAndMortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }
}
