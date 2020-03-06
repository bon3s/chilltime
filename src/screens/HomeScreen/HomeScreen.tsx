import React from 'react';
import { RouterProps } from 'react-router';
import ScreenWrapper from '../ScreenWrapper';
import { HomeScreenStyles } from './styles/HomeScreenStyles';
import { Container, Row, Col } from 'react-bootstrap';
import MovieItem from '../../components/MovieItem/MovieItem';

interface Props extends RouterProps {}

const HomeScreen = (props: Props) => {
    const renderArr: JSX.Element[] = [];
    const object = () => {
        const item = (
            <Col lg={3} md={6} xs={12}>
                <MovieItem />
            </Col>
        );
        while (renderArr.length < 100) {
            renderArr.push(item);
        }
    };
    object();
    return (
        <ScreenWrapper history={props.history}>
            <HomeScreenStyles>
                <Container>
                    <Row>{renderArr}</Row>
                </Container>
            </HomeScreenStyles>
        </ScreenWrapper>
    );
};

export default HomeScreen;
