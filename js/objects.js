// CLASS

class Pelicula {

    constructor(name, year, director, genre, language, image, imdb, rate, trailer) {
        this.name = name,
        this.year = year,
        this.director = director,
        this.genre = genre,
        this.language = language,
        this.image = image,
        this.imdb = imdb,
        this.rate = rate
        this.trailer = `https://www.youtube.com/embed/${trailer}`
    }
}



// MOVIES



let bastardosSinGloria = new Pelicula('Inglourious Basterds', 2009, 'Quentin Tarantino', ['action'], 'inglés', 'assets/img/inglourious-basterds.jpg', 'https://www.imdb.com/title/tt0361748/', 8.3, 'qRYDNWXuip8');

let threeBillboards = new Pelicula('Three Billboards Outside Ebbing, Missouri', 2017, 'Martin McDonagh', ['drama'], 'inglés', 'assets/img/three-billboards.jpg', 'https://www.imdb.com/title/tt5027774/', 8.1, 'Jit3YhGx5pU')

let exorcismEmily = new Pelicula('The Exorcism of Emily Rose', 2005, 'Scott Derrickson', ['horror'], 'inglés', 'assets/img/emily-rose.jpg', 'https://www.imdb.com/title/tt0404032/', 6.7, 'Bi-PLwxwvy8');

let fantasticFox = new Pelicula('Fantastic Mr. Fox', 2009, 'Wes Anderson', ['comedy'], 'inglés', 'assets/img/fantastic-mrfox.jpg', 'https://www.imdb.com/title/tt0432283', 7.9, 'n2igjYFojUo');

let gladiador = new Pelicula('Gladiator', 2000, 'Ridley Scott', ['action'], 'inglés', 'assets/img/gladiator.jpg', 'https://www.imdb.com/title/tt0172495', 8.5,'P5ieIbInFpg');

let bladeRunner = new Pelicula('Blade Runner', 1982, 'Ridley Scott', ['scifi'], 'inglés', 'assets/img/blade-runner.jpg', 'https://www.imdb.com/title/tt0083658', 8.1, 'eogpIG53Cis');

let theLobster = new Pelicula('The Lobster', 2015, 'Yorgos Lanthimos', ['drama'], 'inglés', 'assets/img/lobster.jpg', 'https://www.imdb.com/title/tt3464902', 7.2, 'vU29VfayDMw');

let arrival = new Pelicula('Arrival', 2016, 'Denis Villeneuve', ['scifi'], 'inglés', 'assets/img/arrival.jpg', 'https://www.imdb.com/title/tt2543164', 7.9, 'tFMo3UJ4B4g');

let theWailing = new Pelicula('The Wailing', 2016, 'Na Hong-jin', ['horror'], 'coreano', 'assets/img/wailing.jpg', 'https://www.imdb.com/title/tt5215952', 7.5, '43uAputjI4k');

let odiseaGiles = new Pelicula('La Odisea de los Giles', 2019, 'Sebastián Borensztein', ['drama', 'comedy'], 'español', 'assets/img/odisea-giles.jpg', 'https://www.imdb.com/title/tt10384744', 7.2, 'ZP_o6GQaFW8');

let dasLeben = new Pelicula('Das Leben der Anderen', 2006, 'Florian Henckel von Donnersmarck', ['drama'], 'alemán', 'assets/img/das-leben.jpg', 'https://www.imdb.com/title/tt0405094', 8.4, 'n3_iLOp6IhM');

let redHood = new Pelicula('Batman: Under the Red Hood', 2010, 'Brandon Vietti', ['heroes', 'animation'], 'inglés', 'assets/img/batman-under-redhood.jpg', 'https://www.imdb.com/title/tt1569923', 8.1, 'A2c9MsP3OVs');

let superbad = new Pelicula('Superbad', 2007, 'Greg Mottola', ['comedy'], 'inglés', 'assets/img/superbad.jpg', 'https://www.imdb.com/title/tt0829482', 7.6, '4eaZ_48ZYog');

let monstersInc = new Pelicula('Monsters, Inc.', 2001, 'Pete Docter, David Silverman, Lee Unkrich', ['children', 'animation'], 'ingles', 'assets/img/monsters-inc.jpg', 'https://www.imdb.com/title/tt0198781/', 8.1, 'CGbgaHoapFM')

let ironMan = new Pelicula('Iron Man', 2008, 'Jon Favreau', ['heroes', 'action', 'scifi'], 'ingles', 'assets/img/iron-man.jpg', 'https://www.imdb.com/title/tt0371746/', 7.9, '8ugaeA-nMTc')

let alien = new Pelicula('Alien', 1979, 'Ridley Scott', ['scifi', 'horror'], 'inglés', 'assets/img/alien.jpg', 'https://www.imdb.com/title/tt0078748/', 8.4, 'LjLamj-b0I8')

let clockworkOrange = new Pelicula('A Clockwork Orange', 1971, 'Stanley Kubrick', ['drama', 'crime'], 'inglés', 'assets/img/clockwork-orange.jpg', 'https://www.imdb.com/title/tt0066921', 8.3, 'T54uZPI4Z8A')

let dialM = new Pelicula('Dial M for Murder', 1954, 'Alfred Hitchcock', ['drama', 'crime'], 'inglés', 'assets/img/dial-m.jpg', 'https://www.imdb.com/title/tt0046912', 8.2, 'JWP_hrNHSN4')

let ghostShell = new Pelicula('Ghost in the Shell', 1995, 'Mamoru Oshii', ['animation', 'scifi'], 'japonés', 'assets/img/ghost-shell.jpg', 'https://www.imdb.com/title/tt0113568', 8.0, '8RF09G8Ymqg')

let goodfellas = new Pelicula('Goodfellas', 1990, 'Martin Scorsese', ['crime', 'drama'], 'inglés', 'assets/img/goodfellas.jpg', '9685', 8.7, 'qo5jJpHtI1Y')

let heat = new Pelicula('Heat', 1995, 'Michael Mann', ['crime', 'drama', 'action'], 'inglés', 'assets/img/heat.jpg', 'https://www.imdb.com/title/tt0113277', 8.2, '2GfZl4kuVNI')

let reyLeon = new Pelicula ('The Lion King', 1994, 'Roger Allers', ['animación', 'children'], 'inglés', 'assets/img/lion-king.jpg', 'https://www.imdb.com/title/tt0110357', 8.5, 'lFzVJEksoDY')

let rosemarysBaby = new Pelicula ("Rosemary's Baby", 1968, 'Roman Polanski', ['drama', 'horror'], 'inglés', 'assets/img/rosemarys-baby.jpg', 'https://www.imdb.com/title/tt0063522', 8.0, 'dBSbmNNm84Y')

let seven = new Pelicula ('Seven', 1995, 'David Fincher', ['drama', 'crime'], 'inglés', 'assets/img/seven.jpg', 'https://www.imdb.com/title/tt0114369', 8.6, 'znmZoVkCjpI')

let sunsetBlvd = new Pelicula('Sunset Blvd.', 1950, 'Billy Wilder', ['drama'], 'inglés', 'assets/img/sunset-blvd.jpg', 'https://www.imdb.com/title/tt0043014', 8.4, '_dY0SVxnHjQ')

let theBirds = new Pelicula('The Birds', 1963, 'Alfred Hitchcock', ['drama', 'horror'], 'inglés', 'assets/img/the-birds.jpg', 'https://www.imdb.com/title/tt0056869', 7.7, 'lCxR7dlavwg')

let theTenant = new Pelicula ('The Tenant', 1976, 'Roman Polanski', ['drama', 'horror'], 'inglés', 'assets/img/the-tenant.jpg', 'https://www.imdb.com/title/tt0074811', 7.6, '2Y-4rJJw554')

let theWickerMan = new Pelicula ('The Wicker Man', 1973, 'Robin Hardy', ['crime', 'horror'], 'inglés', 'assets/img/wicker-man.jpg', 'https://www.imdb.com/title/tt0070917', 7.5, 'yXFYU3v-wL4')

let vertigo = new Pelicula ('Vertigo', 1958, 'Alfred Hitchcock', ['crime', 'drama'], 'inglés', 'assets/img/vertigo.jpg', 'https://www.imdb.com/title/tt0052357', 8.3, 'Z5jvQwwHQNY')

let judasMessiah = new Pelicula ('Judas and the Black Messiah', 2021, 'Shaka King', ['drama', 'crime'], 'inglés', 'assets/img/judas-black-messiah.jpg', 'https://www.imdb.com/title/tt9784798', 7.5, 'TnshsDy9QWA')

let split = new Pelicula ('Split', 2016, 'M. Night Shyamalan', ['crime', 'horror'], 'inglés', 'assets/img/split.jpg', 'https://www.imdb.com/title/tt4972582', 7.3, '84TouqfIsiI')

let memoriesOfMurder = new Pelicula ('Memories of Murder', 2003, 'Bong Joon Ho', ['drama', 'crime'], 'coreano', 'assets/img/memories-of-murder.jpg', 'https://www.imdb.com/title/tt0353969', 8.1, 'SjDN7wr0HDc')

let europaReport = new Pelicula ('Europa Report', 2013, 'Sebastián Cordero', ['scifi', 'drama'], 'inglés', 'assets/img/europa-report.jpg', 'https://www.imdb.com/title/tt2051879', 6.4, 'XhdRYk1Y8VA')

let frankenweenie = new Pelicula ('Frankenweenie', 2012, 'Tim Burton', ['animation', 'children'], 'inglés', 'assets/img/frankenweenie.jpg', 'https://www.imdb.com/title/tt1142977', 6.9, '29vIJQohUWE')

let iceAge = new Pelicula ('Ice Age', 2006, 'Chris Wedge', ['animation', 'children'], 'inglés', 'assets/img/ice-age.jpg', 'https://www.imdb.com/title/tt0268380', 7.5, 'i4noiCRJRoE')

let dictator = new Pelicula ('The Dictator', 2012, 'Larry Charles', ['comedy'], 'inglés', 'assets/img/dictator.jpg', 'https://www.imdb.com/title/tt1645170', 6.4, 'TjLaLiwJdok')

let megamind = new Pelicula ('Megamind', 2010, 'Tom McGrath', ['animation', 'children'], 'inglés', 'assets/img/megamind.jpg', 'https://www.imdb.com/title/tt1001526', 7.3, 'ead9HCX9fe4')

let toyStory2 = new Pelicula ('Toy Story 2', 1999, 'John Lasseter, Ash Brannon, Lee Unkrich', ['animation', 'children'], 'inglés', 'assets/img/toy-story-2.jpg', 'https://www.imdb.com/title/tt0120363', 7.9, 'xNWSGRD5CzU')

let wallaceGromit = new Pelicula ('Wallace & Gromit', 2005, 'Steve Box', ['animation', 'children'], 'inglés', 'assets/img/wallace-gromit-vegetales.jpg', 'https://www.imdb.com/title/tt0312004', 7.4, '-08b_XI60_4')

let theOthers = new Pelicula ('The Others', 2001, 'Alejandro Amenábar', ['horror', 'drama'], 'inglés', 'assets/img/the-others.jpg', 'https://www.imdb.com/title/tt0230600', 7.6, 'C7pKqaPtMiA')

let killingSacredDeer = new Pelicula ('The Killing of a Sacred Deer', 2017, 'Yorgos Lanthimos', ['horror', 'drama'], 'inglés', 'assets/img/killing-sacred-deer.jpg', 'https://www.imdb.com/title/tt5715874', 7.0, 'CQFdGfwChtw')

let autopsyJaneDoe = new Pelicula ('The Autopsy of Jane Doe', 2016, 'André Øvredal', ['horror'], 'inglés', 'assets/img/autopsy-jane-doe.jpg', 'https://www.imdb.com/title/tt3289956', 6.8, 'dg8r7ph1DKE')

let skeletonKey = new Pelicula ('The Skeleton Key', 2005, 'Iain Softley', ['horror'], 'inglés', 'assets/img/skeleton-key.jpg', 'https://www.imdb.com/title/tt0397101', 6.5, '4RlCq1Ash-4')

let bloodDiamond = new Pelicula ('Blood Diamond', 2006, 'Edward Zwick', ['drama'], 'inglés', 'assets/img/blood-diamond.jpg', 'https://www.imdb.com/title/tt0450259', 8.0, 'yknIZsvQjG4')

let misery = new Pelicula ('Misery', 1990, 'Rob Reiner', ['horror', 'drama'], 'inglés', 'assets/img/misery.jpg', 'https://www.imdb.com/title/tt0100157', 7.8, 'XHQ9CPRfDsw')

let familiaFuturo = new Pelicula ('Meet the Robinsons', 2007, 'Stephen J. Anderson', ['animation', 'children'], 'inglés', 'assets/img/familia-futuro.jpg', 'https://www.imdb.com/title/tt0396555', 6.8, 'S396-fnLldk')

let pulpFiction = new Pelicula ('Pulp Fiction', 1994, 'Quentin Tarantino', ['drama', 'action'], 'inglés', 'assets/img/pulp-fiction.jpg', 'https://www.imdb.com/title/tt0110912', 8.9, 's7EdQ4FqbhY')



// ARRAY

let arrayPeliculas = [
    bastardosSinGloria, threeBillboards, exorcismEmily, fantasticFox, gladiador, bladeRunner, theLobster, arrival, theWailing, odiseaGiles, dasLeben, redHood, superbad, monstersInc, ironMan, alien, clockworkOrange, dialM, ghostShell, goodfellas, heat, reyLeon, rosemarysBaby, seven, sunsetBlvd, theBirds, theTenant, theWickerMan, vertigo, judasMessiah, split, memoriesOfMurder, europaReport, frankenweenie, iceAge, dictator, megamind, toyStory2, wallaceGromit, theOthers, killingSacredDeer, autopsyJaneDoe, skeletonKey, bloodDiamond, misery, familiaFuturo, pulpFiction
];

function agregarPelicula(variablePelicula) {
    return arrayPeliculas.push(variablePelicula);
}
// agregarPelicula(monstersInc)


// Ordena el array de las películas por nombre
arrayPeliculas = arrayPeliculas.sort((a, b) => {
    if (a.name < b.name) { return -1 }
    else { return 1 }
})


let arrayAccion = arrayPeliculas.filter(e => { return e.genre.includes('action') });
let arrayDrama = arrayPeliculas.filter(e => { return e.genre.includes('drama') });
let arrayTerror = arrayPeliculas.filter(e => { return e.genre.includes('horror') });
let arrayComedia = arrayPeliculas.filter(e => { return e.genre.includes('comedy') });
let arraySciFi = arrayPeliculas.filter(e => { return e.genre.includes('scifi') });
let arrayHeroes = arrayPeliculas.filter(e => { return e.genre.includes('heroes') });
let arrayAnimacion = arrayPeliculas.filter(e => { return e.genre.includes('animation') })
let arrayCrimen = arrayPeliculas.filter(e => { return e.genre.includes('crime') })
let arrayInfantil = arrayPeliculas.filter(e => { return e.genre.includes('children') })

const arrayGeneros = [
    arrayAccion, arrayDrama, arrayTerror, arrayComedia, arraySciFi, arrayHeroes, arrayAnimacion, arrayCrimen
]
