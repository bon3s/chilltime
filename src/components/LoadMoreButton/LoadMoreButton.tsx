import React from 'react';
import LoadMoreButtonStyles from './styles/LoadMoreButtonStyles';
interface Props {
    handleLoadMoreClick: () => void;
}

const LoadMoreButton = (props: Props) => {
    return (
        <LoadMoreButtonStyles onClick={props.handleLoadMoreClick}>
            Load more
        </LoadMoreButtonStyles>
    );
};

export default LoadMoreButton;
