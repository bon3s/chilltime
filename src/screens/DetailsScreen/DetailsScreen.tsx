import React from 'react';
import { RouterProps } from 'react-router';
import { DetailsScreenStyles } from './styles/DetailsScreenStyles';
import { imageHandler } from '../../components/imageHandler';
import { DetailsType } from '../../types/DetailsType';
import { GenreType } from '../../types/GenreType';

interface Props extends RouterProps {
    movieDetails: DetailsType;
}

const DetailsScreen = (props: Props) => {
    return (
        <DetailsScreenStyles>
            <div className="container">
                <div
                    className="details__head"
                    style={{
                        backgroundImage: imageHandler(
                            props.movieDetails.posterPath
                        ),
                    }}>
                    <div className="column-left">
                        {props.movieDetails.title}
                        <div className="column-left__poster">
                            <img src="" alt="" className="poster__image" />
                        </div>
                        <div className="column-left__genres">
                            <ul>
                                {props.movieDetails.genres.map(
                                    (item: GenreType) => (
                                        <li>
                                            <p>{item.name}</p>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="column-right"></div>
                </div>
                <div className="details__body"></div>
            </div>
        </DetailsScreenStyles>
    );
};

export default DetailsScreen;
