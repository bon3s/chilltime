import {
    Service,
    PopularMoviesReply,
    MovieDetailsReply,
    MovieGenresReply,
    SessionIDReply,
} from '../service/service';
import { Dispatch } from 'redux';
import { startLoading, stopLoading } from '../redux/loadingActions';
class LoadingMiddleware implements Service {
    public next: Service;
    public dispatch: Dispatch;

    constructor(next: Service, dispatch: Dispatch) {
        this.next = next;
        this.dispatch = dispatch;
    }

    public async getPopularMovies(page: number): Promise<PopularMoviesReply> {
        this.dispatch(startLoading('getPopularMovies'));
        try {
            const result = await this.next.getPopularMovies(page);
            this.dispatch(stopLoading('getPopularMovies'));
            return result;
        } catch (e) {
            this.dispatch(stopLoading('getPopularMovies'));
            throw e;
        }
    }

    public async getMovieDetails(id: number): Promise<MovieDetailsReply> {
        this.dispatch(startLoading('getMovieDetails'));
        try {
            const result = await this.next.getMovieDetails(id);
            this.dispatch(stopLoading('getMovieDetails'));
            return result;
        } catch (e) {
            this.dispatch(stopLoading('getMovieDetails'));
            throw e;
        }
    }

    public async getSessionID(): Promise<SessionIDReply> {
        this.dispatch(startLoading('getSessionID'));
        try {
            const result = await this.next.getSessionID();
            this.dispatch(stopLoading('getSessionID'));
            return result;
        } catch (e) {
            this.dispatch(stopLoading('getSessionID'));
            throw e;
        }
    }

    public async getMovieGenres(): Promise<MovieGenresReply> {
        this.dispatch(startLoading('getMovieGenres'));
        try {
            const result = await this.next.getMovieGenres();
            this.dispatch(stopLoading('getMovieGenres'));
            return result;
        } catch (e) {
            this.dispatch(stopLoading('getMovieGenres'));
            throw e;
        }
    }
}

export default LoadingMiddleware;
