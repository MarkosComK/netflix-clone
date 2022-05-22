const API_KEY = "436de7473c370dc2c88e6b6a2c28e34b";

const requests = {
    fetchTrending: `/trending/all/week?api_key${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key${API_KEY}&with_genres=028`,
    fetchComdeyMovies: `/discover/movie?api_key${API_KEY}&with_genres=035`,
    fetchHorrorMovies: `/discover/movie?api_key${API_KEY}&with_genres=027`,
    fetchRomanceMovies: `/discover/movie?api_key${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key${API_KEY}&with_genres=99`,
}

export default requests