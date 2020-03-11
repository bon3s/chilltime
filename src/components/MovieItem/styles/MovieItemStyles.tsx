import styled from 'styled-components';
import { theme } from '../../Theme/theme';
const MovieItemStyles = styled.a`
    && {
        min-height: 300px;
        background: #fff;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-decoration: none;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 40px;
        overflow: hidden;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
        .movie {
            &__rating {
                position: absolute;
                top: 10px;
                right: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                z-index: 7;
                overflow: visible;
                svg {
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                p {
                    font-family: ${theme.fonts.fontRegular};
                    font-size: 12px;
                    color: ${theme.colors.white};
                    text-align: center;
                    margin: 5px 0 0;
                    padding: 0;
                    transform: scaleY(0);
                    opacity: 0;
                    transform-origin: top;
                    transition: all 0.5s ease;
                }
            }
            &__genre {
                position: absolute;
                top: 10px;
                left: 20px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                border-radius: 50%;
                z-index: 7;
                overflow: visible;
                svg {
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                ul {
                    padding: 0;
                    list-style-type: none;
                    transform: scaleY(0);
                    transform-origin: top;
                    transition: all 0.5s ease;
                    opacity: 0;
                    li {
                        padding: 0;
                        margin: 0;
                        p {
                            font-family: ${theme.fonts.fontRegular};
                            font-size: 12px;
                            color: ${theme.colors.white};
                            text-align: left;
                            margin: 3px 0 0;
                            padding: 0;
                        }
                    }
                }
            }
            &__language {
                position: absolute;
                top: 10px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                z-index: 7;
                overflow: visible;
                svg {
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }
                p {
                    font-family: ${theme.fonts.fontRegular};
                    font-size: 12px;
                    color: ${theme.colors.white};
                    text-align: center;
                    margin: 5px 0 0;
                    padding: 0;
                    opacity: 0;
                    transform: scaleY(0);
                    transform-origin: top;
                    transition: all 0.5s ease;
                    text-transform: uppercase;
                }
            }
            &__poster {
                display: block;
                width: 100%;
                max-height: 100%;
                height: 400px;
                border-radius: 8px;
                overflow: hidden;
                background: #334dad;

                img {
                    width: 100%;
                    max-width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &__info {
                display: flex;
                flex-direction: column;
                padding: 20px;
                border-radius: 0 0 8px 8px;
                z-index: 5;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0;
                transition: all 0.5s ease;
                h2 {
                    font-family: ${theme.fonts.fontLight};
                    color: ${theme.colors.white};
                    font-size: 24px;
                    line-height: 33px;
                    font-weight: 300;
                    padding: 0;
                    max-width: 100%;
                    word-break: break-word;
                    margin: 0 0 15px 0;
                    max-lines: 2;
                    text-overflow: ellipsis;
                    line-clamp: 2;
                    overflow: hidden;
                }
                p {
                    font-family: ${theme.fonts.fontLight};
                    color: ${theme.colors.white};
                    font-size: 15px;
                    font-weight: 300;
                    line-height: 26px;
                    padding: 0;
                    max-width: 100%;
                    word-break: break-word;
                    transition: all 0.5s ease;
                    max-height: 0;
                    max-lines: 4;
                    text-overflow: ellipsis;
                    line-clamp: 4;
                    overflow: hidden;
                }
            }
        }

        &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            display: block;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.5) 67%,
                rgba(0, 0, 0, 0.5) 100%
            );
            transition: all 0.5s ease;
        }

        &:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            display: block;
            opacity: 0;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.75) 0%,
                rgba(0, 0, 0, 0.65) 61%,
                rgba(0, 0, 0, 0.65) 62%,
                rgba(0, 0, 0, 0.65) 77%,
                rgba(0, 0, 0, 0.65) 100%
            );
            transition: all 0.5s ease;
            z-index: 3;
        }

        &:hover,
        &:focus,
        &:active {
            text-decoration: none;
            transition: all 1s ease;
            .movie {
                &__rating {
                    svg {
                        opacity: 1;
                    }
                    p {
                        opacity: 1;
                        transform: scaleY(1);
                    }
                }
                &__genre {
                    svg {
                        opacity: 1;
                    }
                    ul {
                        opacity: 1;
                        transform: scaleY(1);
                    }
                }
                &__language {
                    svg {
                        opacity: 1;
                    }
                    p {
                        opacity: 1;
                        transform: scaleY(1);
                    }
                }
                &__info {
                    p {
                        max-height: 105px;
                    }
                }
            }
            &:after {
                opacity: 0;
            }
            &:before {
                opacity: 1;
            }
        }
    }
`;

export default MovieItemStyles;
