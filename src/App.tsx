import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Router from './router/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import service from './service/service';
import { store } from './store';
import { addGenres } from './redux/moviesActions';
import AppState from './redux/AppState';
import { connect } from 'react-redux';
import { setError } from './redux/errorActions';
import { MovieType } from './types/MovieType';
import LoadingModal from './components/LoadingModal/LoadingModal';
import { State as LoadingState } from './redux/loadingReducer';

interface Props extends RouteComponentProps {
    page: number;
    error: boolean;
    movies: MovieType[];
    loading: LoadingState;
}

const App = (props: Props) => {
    useEffect(() => {
        if (props.error) {
            store.dispatch(setError());
            props.history.push('/');
        } else {
            service.getMovieGenres().then((res) => {
                store.dispatch(addGenres(res.data));
            });
        }
    });

    return (
        <main>
            <LoadingModal />
            <Router history={props.history} />
        </main>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        page: state.movies.page,
        error: state.error.errorEvent,
        movies: state.movies.movies,
    };
};

export default connect(mapStateToProps)(withRouter(App));
