import csstest from '../../assets/csstest.png';
import { BackButton } from '../../utils/BackButton';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import { BackgroundWrapper } from '../BackgroundVideo/BackgroundVideo.style';
import { ContainerCss, CenteredContent, Container, Square, TaskDescription, TaskImage, Title } from './CssTask.style';

const CssTask: React.FC = () => {
    return (
        <>
            <BackgroundWrapper>
                <BackgroundVideo />
            </BackgroundWrapper>
            <ContainerCss>
                <BackButton to="/">Back to Home</BackButton>
                <CenteredContent>
                    <Title>This is the CSS task</Title>
                    <TaskDescription>Build the layout shown in the image below using HTML and CSS.</TaskDescription>
                    <TaskImage src={csstest} alt="CSS task layout" /> {/* Using styled component for image */}

                    <Container>
                        <Square className="top-left" />
                        <Square className="top-right" />
                        <Square className="bottom-left" />
                        <Square className="bottom-right" />
                    </Container>
                </CenteredContent>
            </ContainerCss>
        </>
    );
};


export default CssTask;