import React from 'react';
import { Switch, Route, RouterProps } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import { connect } from 'react-redux';
import AppState from '../redux/AppState';
import Error404Container from '../containers/ErrorContainer';

interface Props extends RouterProps {}

const Router = (props: Props) => {
    return (
        <Switch>
            <Route path="/" component={HomeContainer} exact />

            <Route path="/404" component={Error404Container} />
        </Switch>
    );
};

const mapStateToProps = (state: AppState) => {
    return {};
};
export default connect(mapStateToProps)(Router);
