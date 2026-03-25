// contains data structure storing the movies

/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js 
   
   notes: 
   - went from array to object --> brackets to curly braces 
   - added: module.exports = myMovies;
   - keys are not between quotation marks anymore (optional) -- now object keys!
   */

const movies = {

   tt0097814: {
      imdbID: "tt0097814",
      Title: "Kiki's Delivery Service",
      Released: "1990-12-20",
      Runtime: 103,
      Genres: ["Animation", "Family", "Fantasy"],
      Directors: ["Hayao Miyazaki"],
      Writers: ["Eiko Kadono", "Hayao Miyazaki"],
      Actors: ["Minami Takayama", "Rei Sakuma", "Mieko Nobusawa"],
      Plot: "Along with her black cat Jiji, Kiki settles in a seaside town and starts a high-flying delivery service. Here begins her magical encounter with independence and responsibility, making lifelong friends and finding her place in the world.",
      Poster: "https://m.media-amazon.com/images/M/MV5BOTFhYWI1NGUtZWFhZS00MTdkLWIzZTItMDBhNWNiZDNlMjYyXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 85,
      imdbRating: 7.8
   },
   tt0113824: {
      imdbID: "tt0113824",
      Title: "Whisper of the Heart",
      Released: "1996-12-13",
      Runtime: 111,
      Genres: ["Animation", "Drama", "Family"],
      Directors: ["Yoshifumi Kondô"],
      Writers: ["Aoi Hiiragi", "Hayao Miyazaki"],
      Actors: ["Yoko Honna", "Issei Takahashi", "Takashi Tachibana"],
      Plot: "A love story between a girl who loves reading books and a boy who has previously checked out all of the library books she chooses.",
      Poster: "https://m.media-amazon.com/images/M/MV5BZWVlOGNlYjgtYWE4Yi00MjdiLWE1MTEtZTRmNzI1ODk5NzMzXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 75,
      imdbRating: 7.8
   },
   tt6587046: {
      imdbID: "tt6587046",
      Title: "The Boy and the Heron",
      Released: "2023-12-08",
      Runtime: 124,
      Genres: ["Animation", "Adventure", "Drama"],
      Directors: ["Hayao Miyazaki"],
      Writers: ["Hayao Miyazaki"],
      Actors: ["Soma Santoki", "Masaki Suda", "Kô Shibasaki"],
      Plot: "In the wake of his mother's death and his father's remarriage, a headstrong boy ventures into a dreamlike world shared by the living and the dead in search of his missing stepmother.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMzA5Zjg3MTAtM2FhZS00NTNjLTg3NjEtNWQ4MTRhZjhiNzVmXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 91,
      imdbRating: 7.3
   }
}

module.exports = movies;