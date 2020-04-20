import React from 'react';
import { RouteProps } from 'react-router';
import MovieItemStyles from './styles/MovieItemStyles';
import {
    StarBorder,
    MovieCreationOutlined,
    ChatBubbleOutline,
} from '@material-ui/icons';
import { MovieType } from '../../types/MovieType';
import { imageHandler } from '../imageHandler';
import { Link } from 'react-router-dom';

interface Props extends RouteProps {
    movie: MovieType;
}

const MovieItem = (props: Props) => {
    const addZeroes = (num: number) => {
        return num.toLocaleString('en', {
            useGrouping: false,
            minimumFractionDigits: 1,
        });
    };

    return (
        <Link to={'/movie/' + props.movie.id}>
            <MovieItemStyles>
                <div className="movie__rating">
                    <StarBorder
                        style={{ color: '#fff', width: '24px', height: '24px' }}
                    />
                    <p>{addZeroes(props.movie.voteAvg)}</p>
                </div>
                <div className="movie__genre">
                    <MovieCreationOutlined
                        style={{ color: '#fff', width: '24px', height: '24px' }}
                    />
                    <ul>
                        {props.movie.genres.map((item, index) => (
                            <li key={`genre ${index}`}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="movie__language">
                    <ChatBubbleOutline
                        style={{ color: '#fff', width: '24px', height: '24px' }}
                    />
                    <p>{props.movie.language}</p>
                </div>
                <div className="movie__poster">
                    <img
                        src={imageHandler(props.movie.posterPath)}
                        alt={props.movie.title + ' poster'}
                    />
                </div>
                <div className="movie__info">
                    <h2>{props.movie.title}</h2>
                    <p>{props.movie.overview}</p>
                </div>
            </MovieItemStyles>
        </Link>
    );
};

export default MovieItem;
