import { gql } from "@apollo/client";

export const AddAnimeMutation = gql`
  mutation AddAnime($animeInput: WatchListInput) {
    addAnime(animeInput: $animeInput) {
      _id
      mal_id
      title
      title_english
      image_url
      score
      createdAt
      updatedAt
      watched
    }
  }
`;

export const RemoveAnimeMutation = gql`
  mutation RemoveAnime($id: ID!) {
    removeAnime(id: $id) {
      _id
      mal_id
      title
    }
  }
`;
