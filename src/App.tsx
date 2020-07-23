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
import GlobalFonts from './components/Theme/global';
import { setSession } from './redux/sessionActions';
import { Session } from './types/SessionIDType';
import moment, { isMoment } from 'moment';
interface Props extends RouteComponentProps {
    page: number;
    error: boolean;
    movies: MovieType[];
    loading: LoadingState;
    session: Session;
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

            console.log(
                moment('2020-08-27 16:26:40', 'YYYY-MM-DDTHH:mm:ss').isBefore(
                    moment()
                )
            );
        }
    });

    return (
        <main>
            <GlobalFonts />
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
        session: state.session.session,
    };
};

export default connect(mapStateToProps)(withRouter(App));
