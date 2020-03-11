import { Movie } from './Movie';
import REST, { URL } from '../api/REST';
import config from '../config';
import client from '../http/client';
import { Genre } from './Genre';

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
