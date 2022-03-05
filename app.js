const movieForm = document.getElementById('movie-searcher');
const submitButton = document.getElementById('submit-btn');

function formHandler(event) {
    event.preventDefault();
}

movieForm.addEventListener('submit', formHandler);

const movieQuery = document.getElementById('movie-name').value;
const apiKey = 'dc643bbb';
let url = `http://www.omdbapi.com/?apikey=${apiKey}/?t=star+wars&plot=full`;

console.log(url);

submitButton.onclick = ''; //put fetch api here
