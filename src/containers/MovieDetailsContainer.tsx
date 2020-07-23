import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MovieDetailsScreen from '../screens/DetailsScreen/MovieDetailsScreen';
import { setDetails } from '../redux/movieDetailsActions';
import AppState from '../redux/AppState';
import service from '../service/service';

import { DetailsType } from '../types/DetailsType';

export interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    movieDetails: DetailsType;
    dispatch: Dispatch;
    error: boolean;
}

const MovieDetailsContainer = (props: Props) => {
    useEffect(() => {
        if (props.error) {
            props.history.push({
                pathname: '/',
                state: { fromMovieDetails: true },
            });
        } else {
            if (props.movieDetails.id === null) {
                service
                    .getMovieDetails(Number(props.match.params.id))
                    .then((res) => {
                        props.dispatch(setDetails(res.data));
                    });
            }
        }
    });

    const handleStarRating = (newRating: number) => {
        console.log(newRating);
    };

    return (
        <MovieDetailsScreen
            handleStarRating={(newRating: number) => handleStarRating}
            movieDetails={props.movieDetails}
        />
    );
};

const mapStateToProps = (state: AppState) => ({
    movieDetails: state.movieDetails.movieDetails,
    error: state.error.errorEvent,
});
export default connect(mapStateToProps)(MovieDetailsContainer);
