import './eventLogo.style.css';
import EventLogoImg from '../../assets/img/drIgnacioChavez/logo-evento.png'


const EventLogo = () => {
    return (    
        <div className="logo-event-container">
            <img src={EventLogoImg} alt="" />
        </div>
    );
};

export default EventLogo;