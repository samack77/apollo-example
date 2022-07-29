import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { GET_POKEMON_LIST } from 'src/app/@graphql/operations/query';
import { ApiService } from 'src/app/@graphql/services/api.service';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }

  list(skip: boolean = false): Observable<Pokemon[]> {
    return this.query(GET_POKEMON_LIST, { skip }).pipe(map(( result: any) => {
      return result.pokemons.results;
    }));
  }
}
