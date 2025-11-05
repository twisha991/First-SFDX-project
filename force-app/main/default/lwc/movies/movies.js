import { LightningElement } from 'lwc';

export default class Movies extends LightningElement {
    showMovies = false;
    selectedMovie = null;

    movieList = [
        { movieName: 'Squid Games', releaseYear: '2020', genre: 'Thriller' },
        { movieName: 'Money Hiest', releaseYear: '2021', genre: 'Suspense' },
        { movieName: 'YJHD', releaseYear: '2014', genre: 'Comedy' },
        { movieName: 'Boss Baby', releaseYear: '2019', genre: 'Kids' }
    ];

    handleCheckboxChange(event) {
        this.showMovies = event.target.checked;
        this.selectedMovie = null;
    }

    handleMovieSelect(event) {
        const movieName = event.target.dataset.id;
        this.selectedMovie = this.movieList.find(movie => movie.movieName === movieName);
    }
    

     }
    
