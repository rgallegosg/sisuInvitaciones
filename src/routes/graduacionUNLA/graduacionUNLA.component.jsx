import { LoginForm } from "../../components/loginForm/loginForm";
import './graduacionUNLA.style.css';
import EventLogo from '../../assets/img/graduacionUNLA/UNLA-Logo.png'
import EventFecha from '../../assets/img/graduacionUNLA/UNLA-Fecha.png';

const GraduacionUNLA = () => {
    const loginData = {
        eventName : 'graduacion-unla',
        redirectURL : '../graduacion-unla',
        eventLogo: EventLogo,
        eventFecha: EventFecha
    }
    return (
        <div>
            <LoginForm loginData={loginData}/>
        </div>
    );
};

export default GraduacionUNLA;