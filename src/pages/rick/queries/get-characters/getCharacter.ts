import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query Characters($filter: FilterCharacter, $page: Int) {
      characters(page: $page, filter: $filter) {
        results {
          name
          image
          episode {
            episode
          }
        }
        info {
          count
        }
      }
      location(id: 1) {
        id
      }
      episodesByIds(ids: [1, 2]) {
        id
      }
    }
  `;