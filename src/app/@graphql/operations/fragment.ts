import { gql } from 'apollo-angular';

export const POKEMON_OBJECT = gql`
  fragment PokemonObject on PokemonItem {
    id
    name
    url @skip(if: $skip)
    image @skip(if: $skip)
    artwork @skip(if: $skip)
    dreamworld @skip(if: $skip)
  }
`;
