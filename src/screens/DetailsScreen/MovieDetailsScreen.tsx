import React from 'react';
import { MovieDetailsScreenStyles } from './styles/DetailsScreenStyles';
import { imageHandler } from '../../components/imageHandler';
import { DetailsType } from '../../types/DetailsType';
import { GenreType } from '../../types/GenreType';

interface Props {
    movieDetails: DetailsType;
}

const MovieDetailsScreen = (props: Props) => {
    console.log(imageHandler(props.movieDetails.backdropPath, 1280));
    return (
        <MovieDetailsScreenStyles>
            <div
                className="details__head"
                style={{
                    backgroundImage: `url(${imageHandler(
                        props.movieDetails.backdropPath,
                        1280
                    )})`,
                }}>
                <div className="container">
                    <div className="column-left">
                        {props.movieDetails.title}
                        <div className="column-left__poster">
                            <img
                                src={imageHandler(
                                    props.movieDetails.posterPath
                                )}
                                alt={`${props.movieDetails.title} movie poster`}
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
            </div>
            <div className="details__body"></div>
        </MovieDetailsScreenStyles>
    );
};

export default MovieDetailsScreen;
