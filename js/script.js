
'use strict'; // деректива(использовать строгий) движок работает в современном режиме



const personalMovieDB = {  // Персональная база данных фильмов DataBase База данных
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    statr: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if(personalMovieDB.count > 30) {
            console.log('Вы киноман'); 
        } else {
            console.log('Произошла ошибка');
        }
    },
    toggleVisibleMyDB() {                        // Элементарный переключатель
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        };
    },
    showMyDB (hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    // showMyDB: function() {
    //     if(personalMovieDB.privat === false) {
    //         console.log(personalMovieDB);
    //     }
    // },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre === '' || genre == null) {
                console.log('Неккоретно');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },  
};
// personalMovieDB.statr();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();



