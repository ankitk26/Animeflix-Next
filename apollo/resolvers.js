import Anime from "../models/Anime";
import {
  fetchAiring,
  fetchAnime,
  fetchCharacters,
  fetchCurrentSeason,
  fetchGenre,
  fetchPictures,
  fetchPopularAnime,
  fetchRecommendations,
  fetchStudios,
  fetchTopAnime,
  fetchUpcoming,
  searchAnime,
} from "./api-calls";

export const resolvers = {
  Query: {
    getTopAnime: () => fetchTopAnime(),
    anime: (_, { id }) => fetchAnime(id),
    studio: (_, { id }) => fetchStudios(id),
    searchAnime: (_, { query }) => searchAnime(query),
    getUpcoming: () => fetchUpcoming(),
    getAiring: () => fetchAiring(),
    genre: (_, { id, page }) => fetchGenre(id, page),
    getCurrentSeason: () => fetchCurrentSeason(),
    getPopular: () => fetchPopularAnime(),
    getWatchList: async () => {
      try {
        const items = await Anime.find();
        return items;
      } catch (err) {
        console.log(err.message);
      }
    },
  },

  AnimeInfo: {
    characters: ({ mal_id }) => fetchCharacters(mal_id),
    pictures: async ({ mal_id }) => {
      const pictures = await fetchPictures(mal_id);
      const length = pictures?.length;
      return pictures.splice(0, length / 2);
    },
    recommendations: ({ mal_id }) => fetchRecommendations(mal_id),
    airing_period: ({ aired }) => aired?.string,
    inWatchlist: async ({ mal_id }) => {
      try {
        const anime = await Anime.findOne({ mal_id });
        if (anime) return true;
        else return false;
      } catch (err) {
        console.log(err.message);
      }
    },
  },

  Genres: {
    genre_name: (parent) => parent.mal_url.name,
  },

  Studio: {
    studio_name: (parent) => parent.meta.name,
  },

  Mutation: {
    addAnime: async (_, { animeInput }) => {
      try {
        const anime = await Anime.findOne({ mal_id: animeInput.mal_id });
        if (anime) {
          return null;
        }
        const savedAnime = new Anime(animeInput);
        return savedAnime.save();
      } catch (err) {
        console.log(err.message);
      }
    },
    removeAnime: async (_, { id }) => {
      try {
        const anime = await Anime.findOne({ mal_id: id });
        return await anime.delete();
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
