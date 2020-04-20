import React from 'react';
import { Switch, Route, RouterProps } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import { connect } from 'react-redux';
import AppState from '../redux/AppState';
import Error404Container from '../containers/ErrorContainer';
import { DetailsType } from '../types/DetailsType';
import MovieDetailsContainer from '../containers/MovieDetailsContainer';
import { MovieType } from '../types/MovieType';

interface Props extends RouterProps {
    movies: MovieType[];
    movieDetails: DetailsType;
}

const Router = (props: Props) => {
    return (
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route
                exact
                path="/movie/:id"
                {...props}
                component={MovieDetailsContainer}
            />
            />
            <Route path="/404" component={Error404Container} />
        </Switch>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        movieDetails: state.movieDetails.movieDetails,
        movies: state.movies.movies,
    };
};
export default connect(mapStateToProps)(Router);
