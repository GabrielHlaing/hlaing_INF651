let movieName = [];

// Function to add a movie to the watch list
function addMovie() {
    const movieIn = document.getElementById("movie-name").value.trim();
  
    if (movieIn !== "") {
      movieName.push({ movie: movieIn });
      document.getElementById("movie-name").value = ""; // Clear input fields
      watchList();
    } else {
      alert("Please enter a movie name before clicking the button");
    }
  }

// Function to remove a movie
function removeMovie(index) {
    movieName.splice(index, 1); // Remove the movie at the given index
    watchList(); // Refresh the displayed list
  }

// Function to render (display) movie
function watchList(movieList = movieName) {
    const movieListElement = document.getElementById("movie-list");
    movieListElement.innerHTML = ""; // Clear the list
  
    movieList.forEach((movieInList, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${movieInList.movie}
        <button onclick="removeMovie(${index})">Remove</button>`;
      movieListElement.appendChild(li); // Append movie to list
    });
}