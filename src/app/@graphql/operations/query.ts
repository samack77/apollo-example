import { gql } from 'apollo-angular';
import { POKEMON_OBJECT } from './fragment';

export const GET_POKEMON_LIST = gql`
  query getPokemonList($skip: Boolean!) {
    pokemons {
      results {
        ...PokemonObject
      }
    }
  }
  ${POKEMON_OBJECT}
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!, $skip: Boolean!) {
    character(id: $id) {
      ...PokemonObject
    }
  }
  ${POKEMON_OBJECT}
`;
