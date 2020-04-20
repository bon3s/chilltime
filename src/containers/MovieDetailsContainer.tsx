import React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import MovieDetailsScreen from '../screens/DetailsScreen/MovieDetailsScreen';
import { DetailsType } from '../types/DetailsType';
import { connect } from 'react-redux';
import AppState from '../redux/AppState';
import service from '../service/service';
import { Dispatch } from 'redux';
import { setDetails } from '../redux/movieDetailsActions';

export interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    movieDetails: DetailsType;
    dispatch: Dispatch;
}

class MovieDetailsContainer extends Component<Props> {
    componentDidMount() {
        service
            .getMovieDetails(Number(this.props.match.params.id))
            .then((res) => {
                this.props.dispatch(setDetails(res.data));
            });
    }
    render() {
        return <MovieDetailsScreen movieDetails={this.props.movieDetails} />;
    }
}
const mapStateToProps = (state: AppState) => ({
    movieDetails: state.movieDetails.movieDetails,
});
export default connect(mapStateToProps)(MovieDetailsContainer);
