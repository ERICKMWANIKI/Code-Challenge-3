//Api endpoint fetching movie data
let url = 'https://api.npoint.io/f8d1be198a18712d3f29/films/';

//Get the container element for the movie list
const liHolder = document.getElementById('films')
//When DOM Content is loaded we remove the first moveie items and fetch movies
document.addEventListener('DOMContentLoaded', ()=>{
    //Remove the first movie item
    document.getElementsByClassName('film item')[0].remove()
     //fetchin the movies
    fetchMovies(url)
})

//Create fetch function
function fetchMovies(url){
    fetch(url)
    .then(response => response.json())
    .then(movies => {
        movies.forEach(movie => {
            displayMovie(movie)
        });
    })
}


//Function to set up movie details on the webpage
function setUpMovieDetails(childMovie){
    const preview = document.getElementById('poster')
    preview.src = childMovie.poster;

    // Set movie details on the webpage
    const movieTitle = document.querySelector('#title');
    movieTitle.textContent = childMovie.title;
    const movieTime = document.querySelector('#runtime');
    movieTime.textContent = `${childMovie.runtime} minutes`;
    const movieDescription = document.querySelector('#film-info');
    movieDescription.textContent = childMovie.description;
    const showTime = document.querySelector('#showtime')
    showTime.textContent = childMovie.showtime;
    const tickets  = document.querySelector('#ticket-num')
    tickets.textContent = childMovie.capacity -childMovie.tickets_sold;
}
// Event listener for "Buy Ticket" button

const btn = document.getElementById('buy-ticket')

        btn.addEventListener('click', function(m){
            let remTickets = document.querySelector('#ticket-num').textContent
            m.preventDefault()
            if(remTickets > 0){
                document.querySelector('#ticket-num').textContent  = remTickets-1
                
            }
            else if(parseInt(remTickets, 10)===0){
                btn.textContent = 'Sold Out'
            }
    })
