import { HTTPClient } from '../http/client';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import {
    ErrorType,
    Service,
    PopularMoviesReply,
    MovieGenresReply,
    MovieDetailsReply,
} from '../service/service';
import config from '../config';
import { store } from '../store';
import { setError } from '../redux/errorActions';

export class URL {
    private url: string;
    private appendix: string = config.APPENDIX;
    private key: string = config.API_KEY;
    constructor(scheme: string, backend: string) {
        this.url = scheme + '://' + backend;
    }

    public apiKeyHandler() {
        return this.appendix + this.key;
    }

    public path(query: string): string {
        return this.url + 'movie/' + query;
    }

    public moviePath(id: number): string {
        return this.url + 'movie/' + id;
    }

    public genresPath() {
        return this.url + 'genre/movie/list';
    }
}

export class ServiceError extends Error {
    public type: ErrorType;
    public endpoint: string;

    constructor(ep: string, type: ErrorType, message?: string) {
        super(`${ep} request failed: ${message || 'no message'}`);
        this.endpoint = ep;
        this.type = type;
    }
    public toString(): string {
        return `ServiceError(endpoint=${this.endpoint}, type=${this.type}, message=${this.message})`;
    }

    public toJSON(): string {
        return this.toString();
    }
}

class REST implements Service {
    public url: URL;
    private client: HTTPClient;
    constructor(httpClient: HTTPClient, url: URL) {
        this.client = httpClient;
        this.url = url;
    }

    public async getPopularMovies(page: number): Promise<PopularMoviesReply> {
        const res = await this.request(this.getPopularMovies, {
            method: 'GET',
            url:
                this.url.path('popular') +
                this.url.apiKeyHandler() +
                '&page=' +
                page,
        });
        return PopularMoviesReply.fromJSON(res.data.results);
    }

    public async getMovieDetails(id: number): Promise<MovieDetailsReply> {
        const res = await this.request(this.getMovieDetails, {
            method: 'GET',
            url: this.url.moviePath(id) + this.url.apiKeyHandler(),
        });
        return MovieDetailsReply.fromJSON(res.data);
    }

    public async getMovieGenres(): Promise<MovieGenresReply> {
        const res = await this.request(this.getMovieGenres, {
            method: 'GET',
            url: this.url.genresPath() + this.url.apiKeyHandler(),
        });
        return MovieGenresReply.fromJSON(res.data.genres);
    }

    private request(
        endpoint: Function,
        req: AxiosRequestConfig
    ): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.client
                .request(req)
                .then((resp) => resolve(resp))
                .catch((err: AxiosError) => {
                    if (err.response) {
                        if (err.response.status === 404) {
                            window.location.href = window.location.origin;
                        }
                    }
                });
        });
    }
}

export default REST;

// const newServiceError = (ep: string, err: AxiosError): ServiceError => {
//     if (err.response) {
//         const { data, status } = err.response;
//         if (status === 401) {
//             // history.push('/');
//             // return new ServiceError(
//             //     ep,
//             //     ErrorType.Unauthenticated,
//             //     'Please add your MovieAPI key.'
//             // );
//         }

//         // if (status === 403) {
//         //     return new ServiceError(ep, ErrorType.PermissionDenied);
//         // }

//         if (status === 404) {
//             // history.push('/');
//             // return new ServiceError(ep, ErrorType.NotFound, 'No movie found.');
//         }

//         // if (status === 408 || err.code === 'ECONNABORTED') {
//         //     return new ServiceError(ep, ErrorType.Timeout);
//         // }

//         // if (status >= 500) {
//         //     return new ServiceError(ep, ErrorType.Internal, data.message);
//         // }

//         return new ServiceError(ep, ErrorType.BadInput, data.message);
//     } else if (err.request) {
//         if (err.code === 'ECONNABORTED') {
//             return new ServiceError(ep, ErrorType.Timeout);
//         }

//         return new ServiceError(ep, ErrorType.Unavailable);
//     }

//     return new ServiceError(ep, ErrorType.Unknown, err.message);
// };
