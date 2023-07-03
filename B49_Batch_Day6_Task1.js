class Movie {
    constructor(movie_title = "NA", studio = "NA", rating = "PG") {
        this.movie_title = movie_title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(arr) {
        let pgMovies = arr.filter((value) => value.rating == "PG-13")
        console.log(pgMovies);
    }
}
const movie1 = new Movie("Avatar-Way of water", "Lightstorm Entertainment", "PG-13");
const movie2 = new Movie("Avangers", "Marvel Studio", "PG-13");
const movie3 = new Movie("Fast and Furious", "Universal Pictures", "PG-13");
const movie4 = new Movie("The Terminator", "Orion Pictures", "R");
const movie5 = new Movie("The God Father", "Paramount Pictures", "R");
const movies = new Movie();


let all_movies = [];
all_movies.push(movie1, movie2, movie3, movie4, movie5)

movies.getPG(all_movies);