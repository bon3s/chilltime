import React from 'react';
import { RouterProps } from 'react-router';
import Router from './router/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props extends RouterProps {}

function App(props: Props) {
    return (
        <main>
            <Router history={props.history} />
        </main>
    );
}

export default App;
