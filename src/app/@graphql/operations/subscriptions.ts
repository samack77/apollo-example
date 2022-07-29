import { gql } from 'apollo-angular';
import { POKEMON_OBJECT } from './fragment';

export const CHANGE_VOTE = gql`
  subscription changeIndividualVote($id: ID!, $skip: Boolean!) {
    changeVote(id: $id) {
      ...CharacterObject
    }
  }
  ${POKEMON_OBJECT}
`;

export const CHANGE_VOTES = gql`
  subscription changeVotes($skip: Boolean!) {
    changeVotes {
      ...CharacterObject
    }
  }
  ${POKEMON_OBJECT}
`;
