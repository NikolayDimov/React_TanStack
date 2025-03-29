import { VideoContainer } from "./BackgroundVideo.style";

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
