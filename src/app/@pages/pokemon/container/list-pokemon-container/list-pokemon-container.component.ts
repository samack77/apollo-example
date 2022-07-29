import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/@core/models/pokemon.model';
import { PokemonService } from 'src/app/@core/services/pokemon.service';

@Component({
  selector: 'list-pokemon-container',
  templateUrl: './list-pokemon-container.component.html',
  styleUrls: ['./list-pokemon-container.component.scss']
})
export class ListPokemonContainerComponent implements OnInit {

  pokemons$?: Observable<Pokemon[]>;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.list(true);
  }

}
