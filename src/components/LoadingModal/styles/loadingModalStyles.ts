import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { theme } from '../../Theme/theme';

const LoadingModalStyles = styled(Modal)`
    background: rgba(0, 0, 0, 0.3);
    .modal-content {
        pointer-events: none;
        background-color: transparent;
        border: none;
        border-radius: 0;
        outline: 0;
        align-items: center;
        justify-content: center;

        .spinner-border {
            width: 5rem;
            height: 5rem;
            color: ${theme.colors.white};
            border-width: 2px;
        }
    }
`;

export default LoadingModalStyles;
