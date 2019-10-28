import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './data-character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }

  getCharacters(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }
}
