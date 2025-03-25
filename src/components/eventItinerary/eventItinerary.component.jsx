import '../../assets/font/graduacion-michoacana-medicina-09/fonts.css';
import './eventItinerary.style.css';

const EventItinerary = (props) => {

    const { styleType, itineraryImage} = props.itineraryData;
    if(styleType === 1){
        return (
            <div>
                <div className="intinerary-title-container">
                    <h2>Itinerario</h2>
                </div>
                <div className="intinerary-img-container">
                    <img src="" alt="" />
                </div>
            </div>
        );
    }
};

export default EventItinerary;