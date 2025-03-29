import csstest from '../../assets/csstest.png';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import { BackgroundWrapper } from '../BackgroundVideo/BackgroundVideo.style';
import { ContainerCss, BackButton, CenteredContent } from './CssTask.style';



export const CssTask = () => {
    return (
        <>
            <BackgroundWrapper>
                <BackgroundVideo />
            </BackgroundWrapper>
            <ContainerCss>
                <BackButton to="/">Back to Home</BackButton>
                <CenteredContent>
                    <h2>This is the CSS task. (5-10 min)</h2>
                    <p>Build the layout shown in the image below using HTML and CSS.</p>
                    <img src={csstest} width={300} />

                    <div className="main">
                        <div className="square"></div>
                    </div>
                </CenteredContent>

            </ContainerCss>
        </>
    );
};
