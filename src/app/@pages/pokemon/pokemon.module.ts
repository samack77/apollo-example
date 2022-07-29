import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonContainerComponent } from './container/list-pokemon-container/list-pokemon-container.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';


@NgModule({
  declarations: [
    ListPokemonContainerComponent,
    ListPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
