import styled from 'styled-components';

const StyledLoader = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    border: 0.375rem solid #FFF;
    border-bottom-color: #007bff;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export { StyledLoader };
