import styled from 'styled-components';

export const DetailsScreenStyles = styled.div`
    .details {
        &__head {
            background-size: cover;
            background-repeat: no-repeat;
            height: 40vh;
            .column-left {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;

                &__poster {
                    width: 200px;
                    img {
                        width: 100%;
                        max-width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                }
            }
        }
    }
`;
