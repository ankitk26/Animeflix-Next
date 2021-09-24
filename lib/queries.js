import { gql } from "@apollo/client";

export const TopAnimeQuery = gql`
  query TopAnimeQuery {
    getTopAnime {
      mal_id
      image_url
      title
    }
  }
`;

export const CurrentSeasonQuery = gql`
  query CurrentSeasonQuery {
    getCurrentSeason {
      season_name
      season_year
      anime {
        mal_id
        title
        image_url
      }
    }
  }
`;

export const PopularAnimeQuery = gql`
  query PopularAnimeQuery {
    getPopular {
      mal_id
      title
      image_url
    }
  }
`;

export const TopAiringAnimeQuery = gql`
  query TopAiringAnimeQuery {
    getAiring {
      mal_id
      title
      image_url
    }
  }
`;

export const UpcomingAnimeQuery = gql`
  query UpcomingAnimeQuery {
    getUpcoming {
      mal_id
      image_url
      title
    }
  }
`;

export const SingleAnimeQuery = gql`
  query SingleAnimeQuery($id: ID!) {
    anime(id: $id) {
      mal_id
      image_url
      trailer_url
      episodes
      title
      title_english
      duration
      rating
      synopsis
      type
      studios {
        mal_id
        name
      }
      premiered
      airing_period
      score
      genres {
        mal_id
        name
      }
      characters {
        mal_id
        image_url
        name
      }
      pictures
      recommendations {
        mal_id
        image_url
        title
      }
    }
  }
`;

export const StudioQuery = gql`
  query StudioQuery($studioId: ID!) {
    studio(id: $studioId) {
      studio_name
      anime {
        mal_id
        title
        image_url
      }
    }
  }
`;

export const GenreAnimeQuery = gql`
  query GenreAnimeQuery($genreId: ID!, $page: Int) {
    genre(id: $genreId, page: $page) {
      genre_name
      anime {
        mal_id
        title
        image_url
      }
    }
  }
`;

export const SearchQuery = gql`
  query SearchQuery($searchQuery: String) {
    searchAnime(query: $searchQuery) {
      mal_id
      title
      image_url
    }
  }
`;
