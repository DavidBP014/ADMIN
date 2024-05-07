import React, { useState } from 'react';
import './EventForm.css'; // Asegúrate de que el nombre del archivo CSS coincida

function EventForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        fecha: ''
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
        <div className="event-form-container">
            {alertMessage && <div className="alert">{alertMessage}</div>}
            <form>
                <label htmlFor="nombre">NOMBRE:</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />

                <label htmlFor="descripcion">DESCRIPCION:</label>
                <textarea id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange}></textarea>

                <label htmlFor="fecha">FECHA:</label>
                <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} />

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

export default EventForm;
