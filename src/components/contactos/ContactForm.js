import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        tipoFamiliar: '',
        mensaje: ''
    });
    const [alertMessage, setAlertMessage] = useState(''); // Estado para manejar los mensajes de alerta

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event, actionType) => {
        event.preventDefault();
        console.log('Action Type:', actionType);
        console.log('Form Data:', formData);

        // Configuración de los mensajes de alerta según la acción
        switch (actionType) {
            case 'crear':
                setAlertMessage('Ajuste realizado: Creación');
                break;
            case 'buscar':
                setAlertMessage('Consulta realizada');
                break;
            case 'actualizar':
                setAlertMessage('Ajuste realizado: Actualización');
                break;
            case 'eliminar':
                setAlertMessage('Ajuste realizado: Eliminación');
                break;
            default:
                setAlertMessage('');
                break;
        }
    };

    return (
        <div className="contact-form-container">
            {alertMessage && <div className="alert">{alertMessage}</div>}
            <form>
                <label htmlFor="nombre">NOMBRE:</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />

                <label htmlFor="email">E-MAIL:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="tipoFamiliar">TIPO DE FAMILIAR:</label>
                <input type="text" id="tipoFamiliar" name="tipoFamiliar" value={formData.tipoFamiliar} onChange={handleChange} />

                <label htmlFor="mensaje">MENSAJE:</label>
                <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>

                <div className="buttons">
                    <button type="button" onClick={(e) => handleSubmit(e, 'crear')}>CREAR</button>
                    <button type="button" onClick={(e) => handleSubmit(e, 'buscar')}>BUSCAR</button>
                    <button type="button" onClick={(e) => handleSubmit(e, 'actualizar')}>ACTUALIZAR</button>
                    <button type="button" onClick={(e) => handleSubmit(e, 'eliminar')}>ELIMINAR</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
