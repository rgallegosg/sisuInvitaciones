import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import './graduacionesUNLA-Invitacion.style.css';
import BackgroundTop from '../../components/backgroundTop/backgroundTop.component';
import EventLogo from '../../components/eventLogo/eventLogo.component';
import EventTitle from '../../components/eventTitle/eventTitle.component';
import EventPhrase from '../../components/eventPhrase/eventPhrase.component';
import EventLocation from '../../components/eventLocation/eventLocation.component';
import EventItinerary from '../../components/eventItinerary/eventItinerary.component';
import TitleImg from '../../assets/img/drIgnacioChavez/secc-generacion.png';
import IconIglesia from '../../assets/icons/iconIglesia1.png';
import IconReception from '../../assets/icons/iconReception1.png';
import PinLocation from '../../assets/icons/pinLocation1.png';
import ImgIglesia from '../../assets/img/graduacionMichoacanaMedicina09/parroquiaFatima.jpg';
import ImgRecepcion from '../../assets/img/graduacionMichoacanaMedicina09/miradorAltozano.jpg';

const GraduacionesUNLAInvitacion = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { guestName } = location.state || {};

    useEffect(() => {
        if (!location.state) {
            navigate(-1); // Redirige a la página anterior
        }
    }, [location.state, navigate]);

    // Si location.state es null, no renderiza nada
    if (!location.state) {
        return null; // No muestra nada mientras se redirige
    }
    
    const titleData = {
        styleType : 1,
        title : 'Facultad de Medicina',
        subTitle: 'Dr. Ignacio Chávez',
        imgTitle:  TitleImg
    }
    const phraseData = {
        styleType : 1,
        phrase1 : '“La medicina es una ciencia de la incertidumbre y un arte de la probabilidad.”',
        author1: '-William Osler',
        phrase2: 'Después de años de esfuerzo, desvelos y aprendizaje, ha llegado el momento de festejar nuestra graduación.',
        phrase3: 'Te invitamos a compartir con nosotros una noche inolvidable llena de alegría, música y buenos momentos.'
    }
    const religionCeremony = {
        styleType: 1,
        icon: IconIglesia,
        title: 'Ceremonia Religiosa',
        lugar: 'Parroquia de Fatima',
        hora: '18:00 hrs.',
        iconLocation: PinLocation,
        direccion: 'Isidro Huarte sn, Cuauhtémoc, Morelia, Mich.',
        fotoLugar: ImgIglesia,
        urlRedirect: 'https://www.google.com/maps/place/Parroquia+de+Fátima/@19.6954659,-101.1860558,17z/data=!3m1!4b1!4m6!3m5!1s0x842d0c3284963131:0x3b0d62a96b31101f!8m2!3d19.6954659!4d-101.1834809!16s%2Fg%2F1v3gs6yw?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
    }
    const reception = {
        styleType: 1,
        icon: IconReception,
        title: 'Recepción',
        lugar: 'Mirador Altozano Grand',
        hora: '19:30 hrs.',
        iconLocation: PinLocation,
        direccion: 'Medina García Norte, Francisco Uraga 1275, Morelia Mich',
        fotoLugar: ImgRecepcion,
        urlRedirect: 'https://www.google.com/maps/place/Francisco+Uraga,+Morelia,+Mich./@19.6841745,-101.1667736,17z/data=!3m1!4b1!4m6!3m5!1s0x842d0df830c74d4d:0xf864edc3e3c7127!8m2!3d19.6841695!4d-101.1641987!16s%2Fg%2F1tfsc4_d?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
    }
    const itineraryData = {
        styleType: 1,
        itineraryImage: 'TEST'
    };

    const graduadosList = ['Ailed Jocelyn Barriga Flores',
                            'Ana Quetzalli Romero Hernández',
                            'Andrea Natalie Flores Rubio',
                            'Atziri Francisco Cruz',
                            'Carolina Cendejas Tapia',
                            'Cristopher Andree Sánchez Pimentel',
                            'Daniela González Chávez',
                            'Daniela Jiménez Pascual',
                            'Dianne López Mercado',
                            'Dulce María Madrigal Villegas',
                            'Eros Karim Barajas Morales',
                            'Hirepan Farid Toscano Villegas',
                            'Joana Guadalupe Cuevas Benitez',
                            'Jonathan Hilario Simón',
                            'Jonathan Quiroz Castro',
                            'Lizzete Iraís Paz Hernández',
                            'María Fernanda López Nava',
                            'Oscar Gustavo Carranza Maldonado',
                            'Ruben Robles Hernández',
                            'Sandra Estefania Mayo Hernández',
                            'Sergio Aldair Reyes López',
                            'Victor Kheri Solorio Ruiz',
                            'Victoria Raya García',
                            'Ximena Sánchez Pedraza'
                        ];
    return (
        
        <div className= "invitacion-main-container">
            <div className="invitacion-container">
                <BackgroundTop />
                <EventLogo />
                <EventTitle titleData={titleData}/>
                <EventPhrase phraseData = {phraseData}/>

                <div className="religion-ceremony-location-main-container">
                    <EventLocation locationData = {religionCeremony}/>
                </div>
                <div className="reception-location-main-container">
                    <EventLocation locationData = {reception}/>
                </div>
                <div className="intinerary-main-container">
                    <EventItinerary itineraryData={itineraryData}/>
                </div>
            </div>
        </div>
    );
};

export default GraduacionesUNLAInvitacion;