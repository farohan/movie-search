//Prevents form from refreshing the page

const movieForm = document.getElementById('movie-searcher');
const submitButton = document.getElementById('submit-btn');

function formHandler(event) {
    event.preventDefault();
}

movieForm.addEventListener('submit', formHandler);

//Calling the API through Fetch

submitButton.onclick = async function fetchMovie() {

    //Getting the movie name from searchbar

    let movieQuery = document.getElementById('movie-name').value;
    movieQuery = movieQuery.replaceAll(' ', '');

    //Setting the API url

    const apiKey = 'dc643bbb';
    let url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieQuery}&plot=full`;

    //Fetching actual data from OMDb

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    //Setting Up Image Poster

    const movieImg = document.getElementById('movie-img');

    movieImg.src = data.Poster;
    movieImg.alt = `${data.Title}'s Poster`;

    //And the title

    const movieTitle = document.getElementById('movie-title');
    movieTitle.innerHTML = data.Title;

    //Finally, filling it with movie data

    const movieData = document.getElementById('movie-data');
    movieData.innerHTML = 
    `
    <strong>Type:</strong> ${data.Type} <br>
    <strong>Genre:</strong> ${data.Genre} <br>
    <strong>Plot:</strong> ${data.Plot} <br>
    <strong>Actors:</strong> ${data.Actors} <br>
    <strong>Runtime:</strong> ${data.Runtime} <br>
    <strong>Rated:</strong> ${data.Rated} <br>
    <strong>Release:</strong> ${data.Released} <br>
    <strong>Box Office:</strong> ${data.BoxOffice} <br>
    <strong>Country:</strong> ${data.Country} 
    `;
}
