import styled from 'styled-components';

const StyledLoader = styled.div`
    width: 72px;
    height: 72px;
    border: 6px solid #FFF;
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
