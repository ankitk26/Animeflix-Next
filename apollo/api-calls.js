import axios from "axios";

// Base URL of API
const BASE_URL = "https://api.jikan.moe/v3";

// Fetch a particular anime
export const fetchAnime = (id) =>
  axios.get(`${BASE_URL}/anime/${id}`).then((res) => res.data);

// Fetch top rated anime
export const fetchTopAnime = () =>
  axios.get(`${BASE_URL}/top/anime`).then((res) => res.data.top);

// Fetch characters of a particular anime
export const fetchCharacters = (mal_id) =>
  axios
    .get(`${BASE_URL}/anime/${mal_id}/characters_staff`)
    .then((res) => res.data.characters);

// Fetch recommendations related to an anime
export const fetchRecommendations = (mal_id) =>
  axios
    .get(`${BASE_URL}/anime/${mal_id}/recommendations`)
    .then((res) => res.data.recommendations);

export const fetchPictures = (mal_id) =>
  axios
    .get(`${BASE_URL}/anime/${mal_id}/pictures`)
    .then((res) => res.data.pictures.map((picture) => picture.large));

// Fetch anime of a particular genre
export const fetchGenre = (id, page) =>
  axios.get(`${BASE_URL}/genre/anime/${id}/${page}`).then((res) => res.data);

// Search for an anime
export const searchAnime = (query) =>
  axios
    .get(`${BASE_URL}/search/anime?q=${query}&limit=10`)
    .then((res) => res.data.results);

// Fetch upcoming anime
export const fetchUpcoming = () =>
  axios.get(`${BASE_URL}/top/anime/1/upcoming`).then((res) => res.data.top);

// Fetch currently airing anime
export const fetchAiring = () =>
  axios.get(`${BASE_URL}/top/anime/1/airing`).then((res) => res.data.top);

// Fetch anime of a given studio
export const fetchStudios = (id) =>
  axios.get(`${BASE_URL}/producer/${id}`).then((res) => res.data);

// Fetch anime by current season
export const fetchCurrentSeason = () =>
  axios.get(`${BASE_URL}/season`).then((res) => res.data);

// Fetch popular anime
export const fetchPopularAnime = () =>
  axios.get(`${BASE_URL}/top/anime/1/bypopularity`).then((res) => res.data.top);
