import { Movie } from './Movie';
import REST, { URL } from '../api/REST';
import config from '../config';
import client from '../http/client';
import { Genre } from './Genre';
import { Session } from './Session';
import { MovieDetails } from './MovieDetails';
import { store } from '../store';
import LoadingMiddleware from '../middlewares/loadingMiddleware';

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
    getSessionID(): Promise<SessionIDReply>;
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
        return new MovieDetailsReply(MovieDetails.fromJSON(movieDetails));
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

export class SessionIDReply {
    public static fromJSON(maybe: any): SessionIDReply {
        if (typeof maybe !== 'object') {
            throw new Error('SessionIDReply should be an object');
        }
        const sessionID: Session = maybe;

        return new SessionIDReply(Session.fromJSON(sessionID));
    }
    public data: Session;
    constructor(sessionID: Session) {
        this.data = sessionID;
    }
}

const url = new URL(config.BACKEND_SCHEME, config.BACKEND);
const rest: Service = new REST(client, url);
const service: Service = new LoadingMiddleware(rest, store.dispatch);

export default service;
