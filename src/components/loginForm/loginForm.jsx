import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './loginForm.style.css';

export const LoginForm = (props) => {

    const { redirectURL, eventLogo, eventFecha, eventName } = props.loginData;

    /*const fullUrl = window.location.pathname;
    const parts = fullUrl.split('/');
    const extractEventName = parts[parts.length - 1];*/
    
    const [formData, setFormData] = useState({
        eventName: eventName,
        guestName: '',
    });
    const [apiResponse, setApiResponse] = useState(null);
    const navigate = useNavigate();

    const handleChangeLoginForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {        
        e.preventDefault(); 
        try {
            //console.log("Enviando datos al servidor:", formData); 
            const response = await fetch(`http://127.0.0.1:8000/api/events/${formData.eventName}?eventName=${formData.eventName}&guestName=${formData.guestName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            //console.log("Respuesta recibida del servidor (cruda):", response); 
            if (!response.ok) {
                throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
            }
            const data = await response.json();
            //console.log("Respuesta del servidor (JSON):", data); // Verificar la respuesta en formato JSON
            if (data.response === "ok") {
                setApiResponse(data);
                navigate(redirectURL);
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert("Error de conexión con el servidor");
        }
    };

    return (
        <section>
            <div className="container">
                <div className="row-container">
                    <div className="invite-logo-container">
                        <img src={eventLogo} alt="" />
                    </div>
                    <div className="invite-date-container">
                        <img src={eventFecha} alt="" />
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="eventName" id="eventName" value={formData.eventName} readOnly />
                            <div className="label-container">
                                <label htmlFor="guestName">Nombre Invitado: </label>
                            </div>
                            <div className="input-name-container">
                                <input type="text" name="guestName" id="guestName" placeholder="Ingresa tu nombre" onChange={handleChangeLoginForm} required />
                            </div>
                            <div className="button-form-container">
                                <input type="submit" value="Ingresar" /> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};