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
   },

   tt16428256: {
      imdbID: "tt16428256",
      Title: "Suzume",
      Released: "2023-04-14",
      Runtime: 122,
      Genres: ["Animation", "Adventure", "Drama"],
      Directors: ["Makoto Shinkai"],
      Writers: ["Makoto Shinkai"],
      Actors: ["Nanoka Hara", "Hokuto Matsumura", "Eri Fukatsu"],
      Plot: "A modern action adventure road story where a 17-year-old girl named Suzume helps a mysterious young man close doors from the other side that are releasing disasters all over in Japan.",
      Poster: "https://m.media-amazon.com/images/M/MV5BODhkNDhmNzktODFmMC00NDZiLWEzN2UtY2YwYzgzYTVlMWZmXkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 77,
      imdbRating: 7.6
   },

   tt5311514: {
      imdbID: "tt5311514",
      Title: "Your Name.",
      Released: "2017-04-07",
      Runtime: 106,
      Genres: ["Animation", "Drama", "Fantasy"],
      Directors: ["Makoto Shinkai"],
      Writers: ["Makoto Shinkai"],
      Actors: ["Ryûnosuke Kamiki", "Mone Kamishiraishi", "Ryo Narita"],
      Plot: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjI1ODZkYTgtYTY3Yy00ZTJkLWFkOTgtZDUyYWM4MzQwNjk0XkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 81,
      imdbRating: 8.4,
   },

   tt0369610: {
      imdbID: "tt0369610",
      Title: "Jurassic World",
      Released: "2015-06-12",
      Runtime: 124,
      Genres: ["Action", "Adventure", "Sci-Fi"],
      Directors: ["Colin Trevorrow"],
      Writers: ["Rick Jaffa", "Amanda Silver", "Colin Trevorrow"],
      Actors: ["Chris Pratt", "Bryce Dallas Howard", "Ty Simpkins"],
      Plot: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzBhNzlkM2UtZTQyOC00NjUyLTkzMmMtNDQ1YTM5N2NmMGE5XkEyXkFqcGc@._V1_SX300.jpg",
      Metascore: 59,
      imdbRating: 6.9
   },

   tt1371111: {
      imdbID: "tt1371111",
      Title: "Cloud Atlas",
      Released: "2012-10-26",
      Runtime: 172,
      Genres: ["Drama", "Mystery", "Sci-Fi"],
      Directors: ["Tom Tykwer", "Lana Wachowski", "Lilly Wachowski"],
      Writers: ["David Mitchell", "Lana Wachowski", "Tom Tykwer"],
      Actors: ["Tom Hanks", "Halle Berry", "Hugh Grant"],
      Plot: "As souls are born and reborn, they renew their connections to one another throughout the ages.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg",
      Metascore: 55,
      imdbRating: 7.3
   }
}

module.exports = movies;

