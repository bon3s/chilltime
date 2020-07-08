import React from 'react';
import { RouterProps } from 'react-router';
import Header from '../../components/Header/Header';
import ScreenWrapperStyles from './styles/ScreenWrapperStyles';

interface Props extends RouterProps {
    children: JSX.Element[] | JSX.Element;
}

const ScreenWrapper = (props: Props) => {
    return (
        <ScreenWrapperStyles>
            <div className="wrapper">
                <Header />
                <main>{props.children}</main>
            </div>
        </ScreenWrapperStyles>
    );
};

export default ScreenWrapper;
