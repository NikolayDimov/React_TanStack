import csstest from './assets/csstest.png';
import './style.css';

export const CssTask = () => {
    return (
        <>
            <h2>This is the CSS task. (5-10 min)</h2>
            <p>Build the layout shown in the image below using HTML and CSS.</p>

            <img src={csstest} width={300} />

            <div className="main">
                <div className="square"></div>
            </div>
        </>
    );
};
