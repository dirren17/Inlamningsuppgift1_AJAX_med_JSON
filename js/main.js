/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=2020
*
*/

let input = document.getElementById("input-box");
let list = document.getElementById("conteiner");
let form = document.getElementById('search-form');
let typeSelect = document.getElementById('type-select');
let url = 'http://www.omdbapi.com/?apikey=4debb930&s=';


form.addEventListener('submit', async function(e) {
    e.preventDefault();

    try {

        if (typeSelect.value == "movie") {
            url += input.value + "&type=movie";
        } else if (typeSelect.value == "series") {
            url += input.value + "&type=series";
        } else if (typeSelect.value == "episode") {
            url += input.value + "&type=episode";
        } else {
            url += input.value;
        }


        let response = await fetch(url);
        let data = await response.json();
    
        let htmlContent = '';
        for (let movie of data.Search) {
            console.log(movie);

            htmlContent += `<h2>${movie.Title}</h2>`;
            htmlContent += `<img src="${movie.Poster}" alt="movieImg">`;
            htmlContent += `<h4> Year: ${movie.Year}</h4>`;
            htmlContent += `<h4> Type: ${movie.Type}</h4>`;
        }

        list.innerHTML = htmlContent;
    } catch(message) {
        throw new Error(message);
    }

});

