import React from 'react';
import { Switch, Route, RouterProps, Redirect } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import { connect } from 'react-redux';
import AppState from '../redux/AppState';
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
            <Redirect to="/" />
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
