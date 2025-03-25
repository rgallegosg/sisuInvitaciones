import '../../assets/font/graduacion-michoacana-medicina-09/fonts.css';
import './eventLocation.style.css';

const EventLocation = (props) => {

    const { styleType, icon, title, lugar, hora, iconLocation, direccion, fotoLugar, urlRedirect } = props.locationData;
    if(styleType === 1){
        return (
            <div>
                <div className="icon-container">
                    <img src={icon} alt="" />
                </div>
                <div className="title-container">
                    <h2>{title}</h2>
                </div>
                <div className="spot-container">
                    <p>{lugar}</p>
                </div>
                <div className="schedule-container">
                    <p>{hora}</p>
                </div>
                <div className="icon-pin-container">
                    <img src={iconLocation} alt="" />
                </div>
                <div className="addres-container">
                    <p>{direccion}</p>
                </div>
                <div className="pictur-container">
                    <img src={fotoLugar} alt="" />
                </div>
                <div className="button-container">
                    <a href={urlRedirect} target="_blank" rel="noopener noreferrer">
                        <input type="button" value="Ubicación" />
                    </a>
                </div>
            </div>
        );
    }
};

export default EventLocation;