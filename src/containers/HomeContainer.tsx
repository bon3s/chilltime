import React, { Component } from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { RouterProps } from 'react-router';
import AppState from '../redux/AppState';
import { connect } from 'react-redux';
import { MovieType } from '../types/MovieType';
import { GenreType } from '../types/GenreType';
import service from '../service/service';
import { Dispatch } from 'redux';
import { addMovies, setPage } from '../redux/moviesActions';
import { resetDetails } from '../redux/movieDetailsActions';

interface Props extends RouterProps {
    movies: MovieType[];
    genres: GenreType[];
    dispatch: Dispatch;
    page: number;
}

class HomeContainer extends Component<Props> {
    componentDidMount() {
        this.props.dispatch(resetDetails());
    }
    public render() {
        const moviesWithGenres = () => {
            const { movies, genres } = this.props;
            const moviesWithGenres: MovieType[] = movies.map(
                (movie: MovieType) => {
                    return {
                        ...movie,
                        genres: movie.genres.map((movieGenre: any) => {
                            const movieFromGenres = genres.find(
                                (genre: GenreType) => genre.id === movieGenre
                            );
                            return movieFromGenres
                                ? movieFromGenres.name
                                : movieGenre;
                        }),
                    };
                }
            );
            return moviesWithGenres;
        };

        const handleLoadMore = () => {
            this.props.dispatch(setPage(this.props.page + 1));
            service.getPopularMovies(this.props.page).then((res) => {
                this.props.dispatch(addMovies(res.data));
            });
        };

        if (this.props.movies.length > 0) {
            return (
                <HomeScreen
                    handleLoadMore={handleLoadMore}
                    movies={moviesWithGenres()}
                    history={this.props.history}
                />
            );
        } else {
            return <div></div>;
        }
    }
}
const mapStateToProps = (state: AppState) => {
    return {
        movies: state.movies.movies,
        genres: state.movies.genres,
        page: state.movies.page,
    };
};
export default connect(mapStateToProps)(HomeContainer);
