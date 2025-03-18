import '../../assets/font/graduacion-michoacana-medicina-09/fonts.css';
import './eventPhrase.style.css';

const EventPhrase = (props) => {
    const { styleType, phrase1, author1, phrase2, phrase3 } = props.phraseData;
    if(styleType == 1){
        return (
            <div className="phrases-container">
                <div className="phrase1-container">
                    <p>{phrase1}</p>
                </div>
                <div className="author1-container">
                    <p>{author1}</p>
                </div>
                <div className="phrase2-container">
                    <p>{phrase2}</p>
                </div>
                <div className="phrase3-container">
                    <p>{phrase3}</p>
                </div>
            </div>
        );
    }
};

export default EventPhrase;