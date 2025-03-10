import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import './loginForm.style.css';
import logoEvent  from "./UNLA-Logo.png";
import dateImage  from "./UNLA-Fecha.png";
export const LoginForm = () => {
    const fullUrl = window.location.pathname;
    const parts = fullUrl.split('/');
    const extractEventName = parts[parts.length - 1];
    const [formData, setFormData] = useState({
        eventName: extractEventName,
        guestName: '',
    });
    const [apiResponse, setApiResponse] = useState(null);
    const navigate = useNavigate(); // Inicializar useNavigate

    const handleChangeLoginForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            console.log("Enviando datos al servidor:", formData); // Verificar los datos que se envían

            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log("Respuesta recibida del servidor (cruda):", response); // Verificar la respuesta cruda

            if (!response.ok) {
                throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Respuesta del servidor (JSON):", data); // Verificar la respuesta en formato JSON

            if (data.response === "ok") {
                setApiResponse(data); // Guardar la respuesta en el estado
                navigate("/");
            } else {
                alert(data.message); // Mostrar alerta si hay un error
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error); // Verificar errores
            alert("Error de conexión con el servidor"); // Mostrar alerta si hay un error de red
        }
    };

    return (
        <section>
            <div className="container">
                <div className="row-container">
                    <div className="invite-logo-container">
                        <img src={logoEvent} alt="" />
                    </div>
                    <div className="invite-date-container">
                        <img src={dateImage} alt="" />
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
                                <input type="submit" value="Ingresar" onSubmit={handleSubmit} /> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};