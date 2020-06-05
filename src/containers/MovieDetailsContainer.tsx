import React from 'react';
import { Component } from 'react';
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

class MovieDetailsContainer extends Component<Props> {
    componentDidMount() {
        if (this.props.error) {
            this.props.history.push('/');
        } else {
            service
                .getMovieDetails(Number(this.props.match.params.id))
                .then((res) => {
                    console.log('container', res.data);
                    this.props.dispatch(setDetails(res.data));
                });
        }
    }

    render() {
        return <MovieDetailsScreen movieDetails={this.props.movieDetails} />;
    }
}
const mapStateToProps = (state: AppState) => ({
    movieDetails: state.movieDetails.movieDetails,
    error: state.error.errorEvent,
});
export default connect(mapStateToProps)(MovieDetailsContainer);
