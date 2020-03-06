import styled from 'styled-components';
import { theme } from '../../Theme/theme';

const HeaderStyles = styled.a`
    padding: 15px 0;
    margin: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    .logo {
        width: 238px;
        height: 55px;
        text-align: center;
        display: inline-block;
        text-decoration: none;
        img {
            width: 100%;
            height: auto;
            max-width: 100%;
            object-fit: cover;
        }
        &:hover,
        &:active,
        &:focus {
            text-decoration: none;
        }
    }
    h4 {
        font-family: ${theme.fonts.fontRegular};
        font-size: 12px;
        color: ${theme.colors.white};
        text-align: center;
        margin: 15px 0 0;
        padding: 0;
    }
`;

export default HeaderStyles;
