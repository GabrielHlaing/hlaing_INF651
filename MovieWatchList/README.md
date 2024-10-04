Movie Watchlist Application
This is a simple web application that allows users to manage a movie watchlist. Users can add movies, display them dynamically on the page, and remove movies once they've been watched.

Features
* Add Movies: Users can input a movie title, and it will be added to the watchlist.
* Display Watchlist: The watchlist is displayed in real-time as movies are added or removed.
* Remove Movies: Users can remove a movie from the watchlist when it's been watched.

Technologies Used
* HTML for structuring the web page.
* CSS for styling the interface.
* JavaScript for functionality (handling functions and arrays).

Code Explanation
* Array Management: The movies are stored in an array (movieName), which is updated each time a user adds or removes a movie.
* Adding Movies: The addMovie() function adds a movie to the array and refreshes the watchlist display.
* Displaying Movies: The watchList() function dynamically updates the HTML to display the current movies in the array.
* Removing Movies: The removeMovie() function removes a selected movie from the array and updates the displayed watchlist in real-time.

How to Use
1. Enter the name of a movie in the input field.
2. Click "Add Movie" to add it to your watchlist.
3. The watchlist will update dynamically.
4. Click "Remove" next to any movie to delete it from the list.

