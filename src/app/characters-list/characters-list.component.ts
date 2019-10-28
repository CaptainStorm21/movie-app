import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharactersService]
})
export class CharactersListComponent implements OnInit {

  characters: Character[];

  constructor(private charactersService: CharactersService) { }

  getCharacters(): void {
    this.charactersService.getCharacters()
      .then(characters => this.characters = characters);
  }

  ngOnInit() {
    this.getCharacters();
  }
}
