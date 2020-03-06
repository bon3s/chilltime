import React from 'react';
import { RouteProps } from 'react-router';
import MovieItemStyles from './styles/MovieItemStyles';
import {
    StarBorder,
    MovieCreationOutlined,
    ChatBubbleOutline,
} from '@material-ui/icons';

interface Props extends RouteProps {}

const MovieItem = (props: Props) => {
    return (
        <MovieItemStyles>
            <div className="movie__rating">
                <StarBorder
                    style={{ color: '#fff', width: '24px', height: '24px' }}
                />
                <p>7.8</p>
            </div>
            <div className="movie__genre">
                <MovieCreationOutlined
                    style={{ color: '#fff', width: '24px', height: '24px' }}
                />
                <p>Action</p>
            </div>
            <div className="movie__language">
                <ChatBubbleOutline
                    style={{ color: '#fff', width: '24px', height: '24px' }}
                />
                <p>English</p>
            </div>
            <div className="movie__poster">
                <img
                    src="https://source.unsplash.com/featured/?movie,poster"
                    alt="movie poster"
                />
            </div>
            <div className="movie__info">
                <h2>Ant-Man (2019)</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit.sadasdsafdsdgfdsgsdfgsdfhsdvwerfrefwerferf
                </p>
            </div>
        </MovieItemStyles>
    );
};

export default MovieItem;
