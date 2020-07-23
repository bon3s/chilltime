import styled from 'styled-components';
import { theme } from '../../../components/Theme/theme';

export const MovieDetailsScreenStyles = styled.div`
    && {
        .details {
            &__head {
                display: flex;
                background-size: cover;
                background-repeat: no-repeat;
                height: 50vh;
                z-index: -1;
                background-position: center;
                transform: skewY(-2.2deg);
                transform-origin: 0 0;
                //chrome antialias fix
                -webkit-backface-visibility: hidden;
                position: relative;
                overflow: visible;
                z-index: 555;
                .head__rise {
                    position: absolute;
                    top: 25%;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    transform: skewY(2.2deg);
                    transform-origin: 0 0;
                    .column-left {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;

                        &__poster {
                            width: 100%;
                            img {
                                width: 100%;
                                max-width: 100%;
                                height: auto;
                                object-fit: cover;
                            }
                        }

                        &__genres {
                            ul {
                                list-style-type: none;
                                display: flex;
                                flex-wrap: wrap;
                                padding: 0;
                                margin: 10px 0 0;
                                justify-content: center;
                                li {
                                    display: inline-block;
                                    p {
                                        font-size: 12px;
                                        color: ${theme.colors.white};
                                        font-family: ${theme.fonts.fontRegular};
                                        padding: 5px 10px;
                                        border-radius: 15px;
                                        margin: 5px;
                                        background: ${theme.colors.darkShades};
                                    }
                                }
                            }
                        }
                    }
                    .column-right {
                        display: flex;
                        flex-direction: column;

                        .movie {
                            &__info {
                                h1 {
                                    padding: 0;
                                    color: ${theme.colors.white};
                                    font-family: ${theme.fonts.fontRegular};
                                    font-size: 32px;
                                    margin: 20px 0 0;
                                    position: relative;
                                }
                                h4 {
                                    padding: 0;
                                    color: ${theme.colors.mainBrand};
                                    font-family: ${theme.fonts.fontLight};
                                    font-size: 26px;
                                    margin-top: 15px;
                                    position: relative;
                                }
                            }
                            &__rating {
                                display: flex;
                                align-items: center;

                                p {
                                    padding: 0;
                                    color: ${theme.colors.white};
                                    font-family: ${theme.fonts.fontLight};
                                    font-size: 16px;
                                    margin: 0 0 0 15px;
                                }
                            }
                        }
                    }
                }
            }
            &__body {
                .movie {
                    &__overview {
                        padding: 30px 0;
                        p {
                            padding: 0;
                            color: ${theme.colors.black};
                            font-family: ${theme.fonts.fontLight};
                            font-size: 18px;
                            line-height: 1.6;
                        }
                    }
                }
            }
        }
    }
`;
