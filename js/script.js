// RECOMENDADOR DE PELÍCULAS

/* 
El objetivo es hacer una recomendación al usuario teniendo en cuenta el género de películas que desee ver.
*/


// DARK MODE con LOCAL STORE

// Animación concatenada con JQuery
$(document).ready(function(){
    $('.darkmode-text-container').delay(1000).fadeIn('slow');
    $('.darkmode-text-container').delay(3000).fadeOut('slow');
});


const btnDarkMode = document.querySelector('#switch');

const sectionOne = document.querySelector('#section-one')
const sectionTwo = document.querySelector('#section-two')
const sectionThree = document.querySelector('#section-three')
const sectionFour = document.querySelector('#section-four')


btnDarkMode.addEventListener('click', () => {
    sectionOne.classList.toggle('darkMode');
    sectionTwo.classList.toggle('darkMode');
    sectionThree.classList.toggle('darkMode');
    sectionFour.classList.toggle('darkMode');
    btnDarkMode.classList.toggle('active');

    if (sectionOne.classList.contains('darkMode') && sectionTwo.classList.contains('darkMode') && sectionThree.classList.contains('darkMode') && sectionFour.classList.contains('darkMode')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
})

// si el usuario está en modo oscuro
if (localStorage.getItem('dark-mode') == 'true') {
    sectionOne.classList.add('darkMode');
    sectionTwo.classList.add('darkMode');
    sectionThree.classList.add('darkMode');
    sectionFour.classList.add('darkMode');
    btnDarkMode.classList.add('active');

} /* si no está */ else {
    sectionOne.classList.remove('darkMode');
    sectionTwo.classList.remove('darkMode');
    sectionThree.classList.remove('darkMode');
    sectionFour.classList.remove('darkMode');
    btnDarkMode.classList.remove('active');
}





// GENERAR DOM

function generarDOM(generoArray) {

    const divPeliculas = document.querySelector('#main_movies_container')

    // Deja el divPeliculas sin elementos
    while (divPeliculas.firstChild) {
        divPeliculas.removeChild(divPeliculas.firstChild);
    }

    // Crea los elementos en el div
    let fragmento = document.createDocumentFragment();

    generoArray.forEach((el) => {
        const divIndividual = document.createElement('div');
        divIndividual.classList.add('card-pelicula', `${el.genre}`)

        let imagenPelicula = document.createElement('img');
        imagenPelicula.classList.add('poster')
        imagenPelicula.setAttribute('src', `${el.image}`)
        divIndividual.appendChild(imagenPelicula)

        let rateContainer = document.createElement('div');
        rateContainer.classList.add('rating-container')

        let star = document.createElement('img');
        star.classList.add('star-img')
        star.setAttribute('src', 'assets/star.png')
        rateContainer.appendChild(star)

        let ratePelicula = document.createElement('div');
        ratePelicula.classList.add('rate')
        ratePelicula.textContent = `${el.rate}`
        rateContainer.appendChild(ratePelicula)

        divIndividual.appendChild(rateContainer)

        let tituloPelicula = document.createElement('h3');
        tituloPelicula.textContent = el.name;
        divIndividual.appendChild(tituloPelicula);

        let directorPelicula = document.createElement('p');
        directorPelicula.textContent = `Director: ${el.director}`;
        divIndividual.appendChild(directorPelicula);

        let anioPelicula = document.createElement('p');
        anioPelicula.textContent = `Year: ${el.year}`;
        divIndividual.appendChild(anioPelicula);

        let generoPelicula = document.createElement('p');
        generoPelicula.textContent = `Genre: ${el.genre.join(', ')}`;
        divIndividual.appendChild(generoPelicula);

        let linkPelicula = document.createElement('a');
        linkPelicula.setAttribute('href', `${el.imdb}`);
        linkPelicula.setAttribute('target', '_blank');
        linkPelicula.textContent = 'Go to IMDb';
        divIndividual.appendChild(linkPelicula);

        fragmento.appendChild(divIndividual)
    })

    divPeliculas.appendChild(fragmento)
}



// RECOMENDAR PELÍCULAS

btnRecomendar = document.getElementById('recomendar_pelicula')

btnRecomendar.addEventListener('click', () => {

    let action = document.getElementById("action");
    let drama = document.getElementById("drama");
    let terror = document.getElementById("terror");
    let comedy = document.getElementById("comedy");
    let scifi = document.getElementById("scifi");
    let heroes = document.getElementById("heroes");
    let animation = document.getElementById("animation");
    let crime = document.getElementById("crime");
    let children = document.getElementById("children");
    let all = document.getElementById("show_all")

    if (action.checked) {
        generarDOM(arrayAccion)
    }
    else if (drama.checked) {
        generarDOM(arrayDrama)
    }
    else if (terror.checked) {
        generarDOM(arrayTerror)
    }
    else if (comedy.checked) {
        generarDOM(arrayComedia)
    }
    else if (scifi.checked) {
        generarDOM(arraySciFi);
    }
    else if (heroes.checked) {
        generarDOM(arrayHeroes);
    }
    else if (animation.checked) {
        generarDOM(arrayAnimacion);
    }
    else if (crime.checked) {
        generarDOM(arrayCrimen);
    }
    else if (children.checked) {
        generarDOM(arrayInfantil);
    }
    else if (all.checked) {
        generarDOM(arrayPeliculas)
    }

    // Deja de ocultar los botones
    let filtros = document.getElementById('filter_container');
    filtros.style.setProperty('display', 'flex')
})


// -------------------------------------------------------------------


// ORDENAR PELÍCULAS


// por NOMBRE
let botonOrdenNombre = document.getElementById('boton_orden_nombre')
botonOrdenNombre.addEventListener('click', () => {

    divPeliculas = document.querySelector('#main_movies_container')

    function OrdenarPorNombre(arrayAOrdenar) {

        // Elimina los objetos que contiene el div
        while (divPeliculas.firstChild) {
            divPeliculas.removeChild(divPeliculas.firstChild);
        }

        let fragmento = document.createDocumentFragment();

        let peliculasOrdenadasNombre = arrayAOrdenar.sort((a, b) => {
            if (a.name < b.name) { return -1 }
            else { return 1 }
        })

        generarDOM(peliculasOrdenadasNombre)
    }

    if (action.checked) {
        OrdenarPorNombre(arrayAccion)
    }
    else if (drama.checked) {
        OrdenarPorNombre(arrayDrama)
    }
    else if (terror.checked) {
        OrdenarPorNombre(arrayTerror)
    }
    else if (comedy.checked) {
        OrdenarPorNombre(arrayComedia)
    }
    else if (scifi.checked) {
        OrdenarPorNombre(arraySciFi)
    }
    else if (heroes.checked) {
        OrdenarPorNombre(arrayHeroes)
    }
    else if (animation.checked) {
        OrdenarPorNombre(arrayAnimacion)
    }
    else if (crime.checked) {
        OrdenarPorNombre(arrayCrimen);
    }
    else if (children.checked) {
        OrdenarPorNombre(arrayInfantil);
    }
    else if (show_all.checked) {
        OrdenarPorNombre(arrayPeliculas)
    }
})


// por AÑO ASCENDENTE
let botonOrdenAnioAsc = document.getElementById('boton_orden_asc')
botonOrdenAnioAsc.addEventListener('click', () => {

    divPeliculas = document.querySelector('#main_movies_container')

    function OrdenarPorAnio(arrayAOrdenar) {

        // Elimina los objetos que contiene el div
        while (divPeliculas.firstChild) {
            divPeliculas.removeChild(divPeliculas.firstChild);
        }

        // Crea los objetos en el div
        let fragmento = document.createDocumentFragment();

        let peliculasOrdenadasAsc = arrayAOrdenar.sort((a, b) => a.year - b.year)

        generarDOM(peliculasOrdenadasAsc)
    }

    if (action.checked) {
        OrdenarPorAnio(arrayAccion)
    }
    else if (drama.checked) {
        OrdenarPorAnio(arrayDrama)
    }
    else if (terror.checked) {
        OrdenarPorAnio(arrayTerror)
    }
    else if (comedy.checked) {
        OrdenarPorAnio(arrayComedia)
    }
    else if (scifi.checked) {
        OrdenarPorAnio(arraySciFi)
    }
    else if (heroes.checked) {
        OrdenarPorAnio(arrayHeroes)
    }
    else if (animation.checked) {
        OrdenarPorAnio(arrayAnimacion)
    }
    else if (crime.checked) {
        OrdenarPorAnio(arrayCrimen);
    }
    else if (children.checked) {
        OrdenarPorAnio(arrayInfantil);
    }
    else if (show_all.checked) {
        OrdenarPorAnio(arrayPeliculas)
    }
})


// por AÑO DESCENDENTE
let botonOrdenAnioDesc = document.getElementById('boton_orden_desc')
botonOrdenAnioDesc.addEventListener('click', () => {

    let divPeliculas = document.querySelector('#main_movies_container')

    function OrdenarPorAnio(arrayAOrdenar) {

        // Elimina los objetos que contiene el div
        while (divPeliculas.firstChild) {
            divPeliculas.removeChild(divPeliculas.firstChild);
        }

        // Crea los objetos en el div
        let fragmento = document.createDocumentFragment();

        let peliculasOrdenadasDesc = arrayAOrdenar.sort((a, b) => b.year - a.year)

        generarDOM(peliculasOrdenadasDesc)
    }

    if (action.checked) {
        OrdenarPorAnio(arrayAccion)
    }
    else if (drama.checked) {
        OrdenarPorAnio(arrayDrama)
    }
    else if (terror.checked) {
        OrdenarPorAnio(arrayTerror)
    }
    else if (comedy.checked) {
        OrdenarPorAnio(arrayComedia)
    }
    else if (scifi.checked) {
        OrdenarPorAnio(arraySciFi)
    }
    else if (heroes.checked) {
        OrdenarPorAnio(arrayHeroes)
    }
    else if (animation.checked) {
        OrdenarPorAnio(arrayAnimacion)
    }
    else if (crime.checked) {
        OrdenarPorAnio(arrayCrimen);
    }
    else if (children.checked) {
        OrdenarPorAnio(arrayInfantil);
    }
    else if (show_all.checked) {
        OrdenarPorAnio(arrayPeliculas)
    }
})


// por CALIFICACIÓN
let botonOrdenCalific = document.querySelector('#boton_orden_calific')
botonOrdenCalific.addEventListener('click', () => {

    let divPeliculas = document.querySelector('#main_movies_container')

    function OrdenarPorCalificacion(arrayAOrdenar) {

        // Elimina los objetos que contiene el div
        while (divPeliculas.firstChild) {
            divPeliculas.removeChild(divPeliculas.firstChild);
        }

        // Crea los objetos en el div
        let fragmento = document.createDocumentFragment();

        let peliculasOrdenadasCalific = arrayAOrdenar.sort((a, b) => b.rate - a.rate)

        generarDOM(peliculasOrdenadasCalific)
    }

    if (action.checked) {
        OrdenarPorCalificacion(arrayAccion)
    }
    else if (drama.checked) {
        OrdenarPorCalificacion(arrayDrama)
    }
    else if (terror.checked) {
        OrdenarPorCalificacion(arrayTerror)
    }
    else if (comedy.checked) {
        OrdenarPorCalificacion(arrayComedia)
    }
    else if (scifi.checked) {
        OrdenarPorCalificacion(arraySciFi)
    }
    else if (heroes.checked) {
        OrdenarPorCalificacion(arrayHeroes)
    }
    else if (animation.checked) {
        OrdenarPorCalificacion(arrayAnimacion)
    }
    else if (crime.checked) {
        OrdenarPorCalificacion(arrayCrimen);
    }
    else if (children.checked) {
        OrdenarPorCalificacion(arrayInfantil);
    }
    else if (show_all.checked) {
        OrdenarPorCalificacion(arrayPeliculas)
    }
})



// -------------------------------------------------------------------



// RECOMENDACIÓN DE PELÍCULA ALEATORIA con JQuery


$(() => {

    $('#random_movie').on('click', () => {

        $('#display_random div').remove();

        let aleatoria = Math.floor(Math.random() * arrayPeliculas.length);
        let peliculaAleatoria = arrayPeliculas[aleatoria]

        $('#display_random').append(
            `<div class="random-movie">

                <div class="movie-poster">
                    <img class="poster" src="${peliculaAleatoria.image}">
                    <div class="rating-container">
                        <img class="star-img" src="assets/star.png">
                        <div class="rate">${peliculaAleatoria.rate}
                    </div>
                </div>

                <div class="movie-data">
                    <h3>${peliculaAleatoria.name}</h3>
                    <p>Director: ${peliculaAleatoria.director}</p>
                    <p>Year: ${peliculaAleatoria.year}</p>
                    <p>Genere: ${peliculaAleatoria.genre.join(', ')}</p>
                    <a href="${peliculaAleatoria.imdb}" target="_blank">Go to IMDb</a></div>
                </div>
            
            </div>`)
    })
})