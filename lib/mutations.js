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
