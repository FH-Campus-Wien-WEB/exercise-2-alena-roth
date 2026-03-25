// stypesheet for index.htmp

window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */

        const article = document.createElement("article");

        const h1 = document.createElement("h1");
        h1.textContent = movie.Title;
        article.appendChild(h1);

        const poster = document.createElement("img");
        poster.src = movie.Poster;
        article.appendChild(poster);

        const released = document.createElement("h2");

        const meta = document.createElement("p");
        meta.classList.add("meta");
        meta.textContent = movie.Runtime + "min • " + movie.Released;
        article.appendChild(meta);

        const ratingMetascore = document.createElement("h2");

        const imdbRating = document.createElement("h2");

        const ratings = document.createElement("p");
        ratings.classList.add("meta");
        ratings.textContent = movie.imdbRating + " IMDb • " + movie.Metascore + " Metascore";
        article.appendChild(ratings);

        const plot = document.createElement("div");
        plot.classList.add("card");
        plot.textContent = movie.Plot;
        article.appendChild(plot);

        const LSgenres = document.createElement("ul"); // "unordered list"
        LSgenres.classList.add("genre-list");
        // String to array:
        movie.Genres.forEach(genre => {
          const li = document.createElement("li");
          li.textContent = genre;
          LSgenres.appendChild(li);
          console.log(movie.Genres);
        });
        article.appendChild(LSgenres);

        const contributors = document.createElement("div");
        contributors.classList.add("contributors");

        const directors = document.createElement("h2");
        directors.textContent = "Director:";
        contributors.appendChild(directors);

        const LSdirectors = document.createElement("ul");
        movie.Directors.forEach(director => {
          const li = document.createElement("li");
          li.textContent = director;
          LSdirectors.appendChild(li);
        });
        contributors.appendChild(LSdirectors);

        const writers = document.createElement("h2");
        writers.textContent = "Writer(s):";
        contributors.appendChild(writers);

        const LSwriters = document.createElement("ul");
        movie.Writers.forEach(writer => {
          const li = document.createElement("li");
          li.textContent = writer;
          LSwriters.appendChild(li);
        });
        contributors.appendChild(LSwriters);

        const actors = document.createElement("h2");
        actors.textContent = "Voice actor(s):";
        contributors.appendChild(actors);

        const LSactors = document.createElement("ul");
        movie.Actors.forEach(actor => {
          const li = document.createElement("li");
          li.textContent = actor;
          LSactors.appendChild(li);
        });
        contributors.appendChild(LSactors);

        article.appendChild(contributors);

        const id = movie.imdbID;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.id = movie.imdbID;

        editButton.id = movie.imdbID;

        // click handler -- copied from developer.mozilla.org -- not sure if this will be the way to go
        editButton.onclick = function () {
          // put logic here later?
        };

        article.appendChild(editButton);

        bodyElement.appendChild(article);

      };

      // copied code from Ex1 ends here

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
        xhr.status +
        " - " +
        xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
