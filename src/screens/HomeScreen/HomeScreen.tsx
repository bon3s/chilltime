import React from 'react';
import { RouterProps } from 'react-router';
import ScreenWrapper from '../ScreenWrapper';
import { HomeScreenStyles } from './styles/HomeScreenStyles';
import { Container, Row, Col } from 'react-bootstrap';
import MovieItem from '../../components/MovieItem/MovieItem';
import { MovieType } from '../../types/MovieType';
import { debounce } from 'ts-debounce';

interface Props extends RouterProps {
    movies: MovieType[];
    handleLoadMore: () => void;
    handleMovieClick: (id: number) => void;
}

const HomeScreen = (props: Props) => {
    window.onscroll = debounce(
        () => {
            if (
                Math.floor(
                    window.innerHeight + document.documentElement.scrollTop
                ) === document.documentElement.offsetHeight
            ) {
                props.handleLoadMore();
            }
        },
        100,
        {
            isImmediate: false,
        }
    );

    return (
        <ScreenWrapper history={props.history}>
            <HomeScreenStyles>
                <Container>
                    <Row>
                        {props.movies !== undefined ? (
                            props.movies.map((item: MovieType) => {
                                return (
                                    <Col
                                        key={item.id || 22}
                                        lg={3}
                                        md={6}
                                        xs={12}>
                                        <MovieItem
                                            handleMovieClick={
                                                props.handleMovieClick
                                            }
                                            movie={item}
                                        />
                                    </Col>
                                );
                            })
                        ) : (
                            <div>
                                <p>
                                    There are no movies to display at the moment
                                </p>
                            </div>
                        )}
                    </Row>
                    {/* <div className="list-footer">
                        <LoadMoreButton
                            handleLoadMoreClick={props.handleLoadMoreClick}
                        />
                    </div> */}
                </Container>
            </HomeScreenStyles>
        </ScreenWrapper>
    );
};

export default HomeScreen;
