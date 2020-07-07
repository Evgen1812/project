
'use strict'; // деректива(использовать строгий) движок работает в современном режиме

let numberOfFilms;

function start() {
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {  // DataBase База данных
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};
  




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let  a = prompt("Один из последних просмотренных фильмов", ''),
             b = prompt("На сколько оцените его", '');
    
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            i--;
            console.log('error');
        }   
    }
}

rememberMyFilms();


 
function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        // console.log('Вы классический зритель');
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count > 30) {
        console.log('Вы киноман'); 
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;

    }
}

writeYourGenres();