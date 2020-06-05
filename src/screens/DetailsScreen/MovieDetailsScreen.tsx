import React from 'react';
import { MovieDetailsScreenStyles } from './styles/DetailsScreenStyles';
import { imageHandler } from '../../components/imageHandler';
import { DetailsType } from '../../types/DetailsType';
import { GenreType } from '../../types/GenreType';

interface Props {
    movieDetails: DetailsType;
}

const MovieDetailsScreen = (props: Props) => {
    return (
        <MovieDetailsScreenStyles>
            <div className="container">
                <div
                    className="details__head"
                    style={{
                        backgroundImage: imageHandler(
                            props.movieDetails.backdropPath
                        ),
                    }}>
                    <div className="column-left">
                        {props.movieDetails.title}
                        <div className="column-left__poster">
                            <img
                                src={imageHandler(
                                    props.movieDetails.posterPath
                                )}
                                alt={
                                    props.movieDetails.title + '\n movie poster'
                                }
                                className="poster__image"
                            />
                        </div>
                        <div className="column-left__genres">
                            <ul>
                                {props.movieDetails.genres.length &&
                                props.movieDetails.genres.length > 0 ? (
                                    props.movieDetails.genres.map(
                                        (item: GenreType, index: number) => (
                                            <li key={index}>
                                                <p>{item.name}</p>
                                            </li>
                                        )
                                    )
                                ) : (
                                    <li></li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="column-right"></div>
                </div>
                <div className="details__body"></div>
            </div>
        </MovieDetailsScreenStyles>
    );
};

export default MovieDetailsScreen;
