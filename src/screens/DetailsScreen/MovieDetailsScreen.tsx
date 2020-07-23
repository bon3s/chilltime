import React from 'react';
import { MovieDetailsScreenStyles } from './styles/DetailsScreenStyles';
import { imageHandler } from '../../components/imageHandler';
import { DetailsType } from '../../types/DetailsType';
import { GenreType } from '../../types/GenreType';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';

interface Props {
    movieDetails: DetailsType;
    handleStarRating: (newRating: number) => void;
}

const MovieDetailsScreen = (props: Props) => {
    // const handleStarClick = (nextValue: number) => {
    //     console.log(nextValue);
    // };

    return (
        <MovieDetailsScreenStyles>
            <div
                className="details__head"
                style={{
                    backgroundImage: `linear-gradient( rgba(0,0,0,.6), rgba(0,0,0,.6) ),url(${imageHandler(
                        props.movieDetails.backdropPath,
                        1280
                    )})`,
                }}>
                <div className="head__rise">
                    <div className="container">
                        <Row>
                            <Col md={3}>
                                <div className="column-left">
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
                                            props.movieDetails.genres.length >
                                                0 ? (
                                                props.movieDetails.genres.map(
                                                    (
                                                        item: GenreType,
                                                        index: number
                                                    ) => (
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
                            </Col>
                            <Col md={{ span: 8, offset: 1 }}>
                                <div className="column-right">
                                    <div className="movie__info">
                                        <h1>
                                            {props.movieDetails.title} (
                                            {moment(
                                                props.movieDetails.releaseDate
                                            ).format('YYYY')}
                                            )
                                        </h1>
                                        <h4>{props.movieDetails.tagline}</h4>
                                        <div className="movie__rating">
                                            <StarRatingComponent
                                                name="movieRating"
                                                starCount={5}
                                                editing={true}
                                                value={
                                                    props.movieDetails.voteAvg /
                                                    2
                                                }
                                                onStarClick={(val: number) =>
                                                    console.log(val)
                                                }
                                            />

                                            <p>{`${props.movieDetails.voteAvg}/10`}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="details__body">
                <div className="container">
                    <Row>
                        <Col md={{ span: 8, offset: 4 }}>
                            <div className="movie__overview">
                                <p>{props.movieDetails.overview}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </MovieDetailsScreenStyles>
    );
};

export default MovieDetailsScreen;
