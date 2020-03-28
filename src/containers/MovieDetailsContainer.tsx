import React from 'react';
import { Component } from 'react';
import { RouterProps } from 'react-router';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import { DetailsType } from '../types/DetailsType';

interface Props extends RouterProps {
    movieDetails: DetailsType;
}

class MovieDetailsContainer extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <DetailsScreen
                history={this.props.history}
                movieDetails={this.props.movieDetails}
            />
        );
    }
}

export default MovieDetailsContainer;
