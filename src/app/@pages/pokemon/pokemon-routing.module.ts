import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonContainerComponent } from './container/list-pokemon-container/list-pokemon-container.component';

const routes: Routes = [
  {
    path: '',
    component: ListPokemonContainerComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
