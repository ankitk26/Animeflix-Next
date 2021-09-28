import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Query {
    getTopAnime: [AnimeItem]
    anime(id: ID!): AnimeInfo
    searchAnime(query: String): [AnimeItem]
    genre(id: ID!, page: Int): Genres
    getUpcoming: [AnimeItem]
    getAiring: [AnimeItem]
    studio(id: ID!): Studio
    getCurrentSeason: Season
    getPopular: [AnimeItem]
    getWatchList: [WatchListAnime]
  }

  type AnimeItem {
    mal_id: ID!
    image_url: String
    title: String
  }

  type AnimeInfo {
    mal_id: ID!
    title: String
    title_english: String
    image_url: String
    trailer_url: String
    episodes: Int
    duration: String
    premiered: String
    synopsis: String
    score: Float
    type: String
    rating: String
    studios: [Genre]
    airing_period: String
    genres: [Genre]
    characters: [Character]
    pictures: [String]
    recommendations: [AnimeItem]
    inWatchlist: Boolean
  }

  type Genre {
    mal_id: ID
    name: String
  }

  type Genres {
    genre_name: String
    anime: [AnimeItem]
  }

  type Season {
    season_name: String
    season_year: Int
    anime: [AnimeItem]
  }

  type Studio {
    studio_name: String
    anime: [AnimeItem]
  }

  type Character {
    mal_id: ID
    image_url: String
    name: String
  }

  scalar Date

  type WatchListAnime {
    _id: ID
    mal_id: ID
    title: String
    title_english: String
    image_url: String
    score: Float
    watched: Boolean
    createdAt: Date
    updatedAt: Date
  }

  input WatchListInput {
    mal_id: ID!
    title: String!
    title_english: String
    image_url: String
    score: Float
  }

  type Mutation {
    addAnime(animeInput: WatchListInput): WatchListAnime
  }
`;
