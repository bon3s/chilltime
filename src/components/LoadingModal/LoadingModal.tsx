import React from 'react';
import LoadingModalStyles from './styles/loadingModalStyles';
import { State as LoadingState } from '../../redux/loadingReducer';
import { Spinner } from 'react-bootstrap';
import AppState from '../../redux/AppState';
import { connect } from 'react-redux';

interface Props {
    loading: LoadingState;
}

const LoadingModal = (props: Props) => {
    let loading = false;
    for (var property in props.loading) {
        if (props.loading.hasOwnProperty(property)) {
            if (props.loading[property]) {
                loading = true;
            }
        }
    }
    return (
        <div className="modalWrapper">
            <LoadingModalStyles
                show={loading}
                backdrop="static"
                keyboard={false}
                animation={false}
                centered>
                <Spinner animation="border" />
            </LoadingModalStyles>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    loading: state.loading,
});

export default connect(mapStateToProps)(LoadingModal);
