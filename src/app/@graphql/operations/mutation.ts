import { gql } from 'apollo-angular';
import { POKEMON_OBJECT } from './fragment';

export const ADD_VOTE = gql`
  mutation addVote($id: ID!, $skip: Boolean!) {
    addVote(character: $id) {
      characters {
        ...CharacterObject
      }
    }
  }
  ${POKEMON_OBJECT}
`;
