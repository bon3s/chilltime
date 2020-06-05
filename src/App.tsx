import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Router from './router/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import service from './service/service';
import { store } from './store';
import { addMovies, addGenres, setPage } from './redux/moviesActions';
import AppState from './redux/AppState';
import { connect } from 'react-redux';
import { setError } from './redux/errorActions';
import Axios from 'axios';

interface Props extends RouteComponentProps {
    page: number;
    error: boolean;
}

class App extends Component<Props> {
    componentDidMount() {
        if (this.props.error) {
            store.dispatch(setError());
            this.props.history.push('/');
        } else {
            service.getMovieGenres().then((res) => {
                store.dispatch(addGenres(res.data));
            });

            service.getPopularMovies(this.props.page).then((res) => {
                store.dispatch(setPage(this.props.page + 1));
                store.dispatch(addMovies(res.data));
            });
            Axios.interceptors.response.use(
                function (response) {
                    console.log('interceptor', response);
                    return response;
                },
                function (error) {
                    console.log('interceptorErr', Promise.resolve(error));
                    return Promise.reject(error);
                }
            );
        }
    }

    render() {
        return (
            <main>
                <Router history={this.props.history} />
            </main>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        page: state.movies.page,
        error: state.error.errorEvent,
    };
};
export default connect(mapStateToProps)(withRouter(App));
