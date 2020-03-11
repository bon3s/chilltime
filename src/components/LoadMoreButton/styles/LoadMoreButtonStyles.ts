import styled from 'styled-components';
import { theme } from '../../Theme/theme';
import { Button } from 'react-bootstrap';

const LoadMoreButtonStyles = styled(Button)`
    && {
        background: transparent;
        box-shadow: none;
        outline: none;
        padding: 30px;
        border-radius: 50%;
        border: 1px dashed ${theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ${theme.fonts.fontBold};
        font-size: 14px;
        text-transform: uppercase;
        color: ${theme.colors.white};
        text-align: center;
        transition: all 0.5s ease;
        width: 100px;
        height: 100px;

        &:hover,
        &:focus,
        &:active {
            outline: none;
            box-shadow: none;
            background: transparent;
            border: 1px solid ${theme.colors.white};
        }
    }
`;

export default LoadMoreButtonStyles;
