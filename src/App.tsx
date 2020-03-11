import React, { Component } from 'react';
import { RouterProps } from 'react-router';
import Router from './router/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import service from './service/service';
import { store } from './store';
import { addMovies, addGenres, setPage } from './redux/moviesActions';
import AppState from './redux/AppState';
import { connect } from 'react-redux';

interface Props extends RouterProps {
    page: number;
}

class App extends Component<Props> {
    componentDidMount() {
        service.getMovieGenres().then(res => {
            store.dispatch(addGenres(res.data));
        });

        service.getPopularMovies(this.props.page).then(res => {
            store.dispatch(setPage(this.props.page + 1));
            store.dispatch(addMovies(res.data));
        });
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
    };
};
export default connect(mapStateToProps)(App);
