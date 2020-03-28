import { Movie } from './Movie';
import REST, { URL } from '../api/REST';
import config from '../config';
import client from '../http/client';
import { Genre } from './Genre';
import { MovieDetails } from './MovieDetails';

export enum ErrorType {
    Unknown,
    BadInput,
    NotFound,
    PermissionDenied,
    Unauthenticated,
    Internal,
    Unavailable,
    Timeout,
    Offline,
}

export interface Service {
    getPopularMovies(page: number): Promise<PopularMoviesReply>;
    getMovieGenres(): Promise<MovieGenresReply>;
    getMovieDetails(id: number): Promise<MovieDetailsReply>;
}

export class PopularMoviesReply {
    public static fromJSON(maybe: any): PopularMoviesReply {
        if (!Array.isArray(maybe)) {
            throw new Error('PopularMoviesReply should be an array');
        }
        const moviesArray: Movie[] = [];
        for (const maybeMovie of maybe) {
            moviesArray.push(Movie.fromJSON(maybeMovie));
        }
        return new PopularMoviesReply(moviesArray);
    }
    public data: Movie[];
    constructor(movieArray: Movie[]) {
        this.data = movieArray;
    }
}

export class MovieDetailsReply {
    public static fromJSON(maybe: any): MovieDetailsReply {
        if (typeof maybe !== 'object' && maybe !== null) {
            throw new Error('MovieDetailsReply should be an object');
        }
        const movieDetails: MovieDetails = maybe;

        return new MovieDetailsReply(movieDetails);
    }
    public data: MovieDetails;
    constructor(movieDetails: MovieDetails) {
        this.data = movieDetails;
    }
}

export class MovieGenresReply {
    public static fromJSON(maybe: any): MovieGenresReply {
        if (!Array.isArray(maybe)) {
            throw new Error('MovieGenresReply should be an array');
        }
        const genresArray: Genre[] = [];
        for (const maybeGenre of maybe) {
            genresArray.push(Genre.fromJSON(maybeGenre));
        }
        return new MovieGenresReply(genresArray);
    }
    public data: Genre[];
    constructor(genresArray: Genre[]) {
        this.data = genresArray;
    }
}

const url = new URL(config.BACKEND_SCHEME, config.BACKEND);
const service: Service = new REST(client, url);

export default service;
