import { useState, useEffect } from "react";
import './countdown.style.css';

const Countdown = (props) => {
    //Creando variables
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const { date } = props.dateData;
    const getTime = () => {
        const time = Date.parse(date) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(date), 1000);

        return () => clearInterval(interval);
    }, []);

    const dateArray = date.split(",");
    let noMonth = '';

    switch (dateArray[0]) {
        case 'January':
            noMonth = '01';
        break;
        case 'February':
            noMonth = '02';
        break;
        case 'March':
            noMonth = '03';
        break;
        case 'April':
            noMonth = '04';
        break;
        case 'May':
            noMonth = '05';
        break;
        case 'June':
            noMonth = '06';
        break;
        case 'July':
            noMonth = '07';
        break;
        case 'August':
            noMonth = '08';
        break;
        case 'September':
            noMonth = '09';
        break;
        case 'October':
            noMonth = '10';
        break;
        case 'November':
            noMonth = '11';
        break;
        case 'December':
            noMonth = '12';
        break;
        default:
            noMonth = '00';
        break;
    }

    return (
        <div className='date-container'>
            <h1 className='timer-title'>
                {noMonth} | {dateArray[1]} | {dateArray[2]}
            </h1>
            <div className="timer-container">
                <div className='timer-col'>
                    <div className='timer-box'>
                        <p className='timer-text'>{days < 10 ? '0' + days : days}</p>
                        <span className='timer-span'>D&iacute;as</span>
                    </div>
                </div>
                <div className='timer-col'>
                    <div className='timer-box'>
                        <p className='timer-text'>{hours < 10 ? '0' + hours : hours}</p>
                        <span className='timer-span'>Horas</span>
                    </div>
                </div>
                <div className='timer-col'>
                    <div className='timer-box'>
                        <p className='timer-text'>{minutes < 10 ? '0' + minutes : minutes}</p>
                        <span className='timer-span'>Minutos</span>
                    </div>
                </div>
                <div className='timer-col'>
                    <div className='timer-box'>
                        <p className='timer-text'>{seconds < 10 ? '0' + seconds : seconds}</p>
                        <span className='timer-span'>Segundos</span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Countdown;