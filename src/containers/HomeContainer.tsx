import React, { useEffect } from 'react';
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
import { store } from '../store';

interface Props extends RouterProps {
    movies: MovieType[];
    genres: GenreType[];
    dispatch: Dispatch;
    page: number;
}

const HomeContainer = (props: Props) => {
    useEffect(() => {
        props.dispatch(resetDetails());
        if (props.page === 1 && props.movies.length === 0) {
            service.getPopularMovies(props.page).then((res) => {
                store.dispatch(setPage(props.page + 1));
                store.dispatch(addMovies(res.data));
            });
        }
    });

    const moviesWithGenres = () => {
        const { movies, genres } = props;
        const moviesWithGenres: MovieType[] = movies.map((movie: MovieType) => {
            return {
                ...movie,
                genres: movie.genres.map((movieGenre: any) => {
                    const movieFromGenres = genres.find(
                        (genre: GenreType) => genre.id === movieGenre
                    );
                    return movieFromGenres ? movieFromGenres.name : movieGenre;
                }),
            };
        });

        return moviesWithGenres;
    };

    const handleLoadMore = () => {
        props.dispatch(setPage(props.page + 1));
        service.getPopularMovies(props.page).then((res) => {
            props.dispatch(addMovies(res.data));
        });
    };

    if (props.movies.length > 0) {
        return (
            <HomeScreen
                handleLoadMore={handleLoadMore}
                movies={moviesWithGenres()}
                history={props.history}
            />
        );
    } else {
        return <div></div>;
    }
};

const mapStateToProps = (state: AppState) => {
    return {
        movies: state.movies.movies,
        genres: state.movies.genres,
        page: state.movies.page,
    };
};
export default connect(mapStateToProps)(HomeContainer);
