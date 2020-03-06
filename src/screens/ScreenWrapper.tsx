import React from 'react';
import { RouterProps } from 'react-router';
import GlobalFonts from '../components/Theme/global';
import Header from '../components/Header/Header';

interface Props extends RouterProps {
    children: JSX.Element[] | JSX.Element;
}

const ScreenWrapper = (props: Props) => {
    return (
        <div className="wrapper">
            <GlobalFonts />
            <Header />
            <main>{props.children}</main>
        </div>
    );
};

export default ScreenWrapper;
