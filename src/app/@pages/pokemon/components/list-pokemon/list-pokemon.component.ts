import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/@core/models/pokemon.model';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  @Input() pokemons: Pokemon[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
