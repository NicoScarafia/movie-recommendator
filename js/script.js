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

    let template = document.querySelector('.template').content
    let fragment = document.createDocumentFragment()
    let divContainer = document.querySelector('#movies_container')

    
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }

    generoArray.forEach(el => {

        let clone = document.importNode(template, true);

        clone.querySelector('img').src = el.image;
        clone.querySelector('img').alt = `${el.name} Poster`;
        clone.querySelector('.rate').textContent = el.rate.toFixed(1);
        
        clone.querySelector('h3').textContent = el.name;
        clone.querySelector('.director').textContent = `Director: ${el.director}`;
        clone.querySelector('.year').textContent = `Year: ${el.year}`;
        clone.querySelector('.genre').textContent = `Genre: ${el.genre.join(', ')}`;
        clone.querySelector('a').href = el.imdb;

        // Coloca el video en atributo de datos del botón
        clone.querySelector('button').dataset.src = el.trailer;

        fragment.appendChild(clone);
    });

    divContainer.appendChild(fragment);


    $('.show-trailer').on('click', (e) => {
        $('.modal-container').addClass('visible');
        // Obtiene el iframe y asigna al botón la URL guardada
        $('.modal-container').find('iframe').attr('src', $(e.currentTarget).data('src'));
    });

    $('.close-trailer').on('click', () => {
        $('.modal-container').removeClass('visible');
        // Detiene la reproducción del video, poniendo la URL en blanco
        $('.modal-container').find('iframe').attr('src', '');
    });
}



// RECOMENDAR PELÍCULAS

btnRecomendar = document.getElementById('recomendar_pelicula')

btnRecomendar.addEventListener('click', () => {

    let action = document.getElementById("action");
    let drama = document.getElementById("drama");
    let horror = document.getElementById("horror");
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
    else if (horror.checked) {
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

    divPeliculas = document.querySelector('#movies_container')

    function OrdenarPorNombre(arrayAOrdenar) {

        // Elimina los objetos que contiene el div
        while (divPeliculas.firstChild) {
            divPeliculas.removeChild(divPeliculas.firstChild);
        }

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
    else if (horror.checked) {
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

    divPeliculas = document.querySelector('#movies_container')

    function OrdenarPorAnio(arrayAOrdenar) {

        // Elimina los objetos que contiene el div
        while (divPeliculas.firstChild) {
            divPeliculas.removeChild(divPeliculas.firstChild);
        }

        let peliculasOrdenadasAsc = arrayAOrdenar.sort((a, b) => a.year - b.year)

        generarDOM(peliculasOrdenadasAsc)
    }

    if (action.checked) {
        OrdenarPorAnio(arrayAccion)
    }
    else if (drama.checked) {
        OrdenarPorAnio(arrayDrama)
    }
    else if (horror.checked) {
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

    let divPeliculas = document.querySelector('#movies_container')

    function OrdenarPorAnio(arrayAOrdenar) {

        // Elimina los objetos que contiene el div
        while (divPeliculas.firstChild) {
            divPeliculas.removeChild(divPeliculas.firstChild);
        }

        let peliculasOrdenadasDesc = arrayAOrdenar.sort((a, b) => b.year - a.year)

        generarDOM(peliculasOrdenadasDesc)
    }

    if (action.checked) {
        OrdenarPorAnio(arrayAccion)
    }
    else if (drama.checked) {
        OrdenarPorAnio(arrayDrama)
    }
    else if (horror.checked) {
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

    let divPeliculas = document.querySelector('#movies_container')

    function OrdenarPorCalificacion(arrayAOrdenar) {

        // Elimina los objetos que contiene el div
        while (divPeliculas.firstChild) {
            divPeliculas.removeChild(divPeliculas.firstChild);
        }

        let peliculasOrdenadasCalific = arrayAOrdenar.sort((a, b) => b.rate - a.rate)

        generarDOM(peliculasOrdenadasCalific)
    }

    if (action.checked) {
        OrdenarPorCalificacion(arrayAccion)
    }
    else if (drama.checked) {
        OrdenarPorCalificacion(arrayDrama)
    }
    else if (horror.checked) {
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
                        <div class="rate">${peliculaAleatoria.rate.toFixed(1)}
                    </div>
                </div>

                <div class="movie-data">

                    <h3>${peliculaAleatoria.name}</h3>
                    <p>Director: ${peliculaAleatoria.director}</p>
                    <p>Year: ${peliculaAleatoria.year}</p>
                    <p>Genre: ${peliculaAleatoria.genre.join(', ')}</p>
                    <a href="${peliculaAleatoria.imdb}" target="_blank">Visit IMDb</a></div>
                    <a class="movie-trailer" href="${peliculaAleatoria.trailer}" target="_blank"><i class="bi bi-film"></i> Watch Trailer</a></div>

                </div>
            
            </div>`)
    })
})