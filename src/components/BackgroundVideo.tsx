import styled from "styled-components";

const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const BackgroundVideo = () => {
    return (
        <VideoContainer>
            <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%' }}>
                <source src="/video.mp4" type="video/mp4" />
                <source src="/video.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </VideoContainer>
    );
};

export default BackgroundVideo;
