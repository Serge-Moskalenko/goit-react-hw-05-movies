import axios from 'axios';
export class ApiServise {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/';
    this.key = '411d08d89a4569fb1b50aec07ee6fb72';
    this.searchQuery = '';
    this.page = 1;
    this.idMovie = null;
  }
  async fetchMovie(movie) {
    try {
      const searchParams = new URLSearchParams({
        api_key: this.key,
        language:'en-US',
        query: movie,
        page: 1,
        include_adult: false,
      });
      const request = `${this.url}search/movie?${searchParams}`;
      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
  async fetchById(id) {
    try {
      const request = `${this.url}movie/${id}?api_key=${this.key}`;
      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchDefault() {
    try {
      const request = `${this.url}trending/movie/day?api_key=${this.key}`;
      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  async fetchReviews(id) {
    try {
      const searchParams = new URLSearchParams({
        api_key: this.key,
        language:'en-US',
        page: 1,
      });
      const request = `${this.url}movie/${id}/reviews?${searchParams}`;
      const data = await axios.get(request);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  async fetchCast(id) {
    try {
    
        const request = `${this.url}movie/${id}/credits?api_key=${this.key}`;
      const data = await axios.get(request);
    
        return data;

    } catch (error) {
      console.log(error.message);
    }
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get movieId() {
    return this.idMovie;
  }
  set movieId(movieId) {
    this.idMovie = movieId;
  }
  resetPage() {
    this.page = 1;
  }
};