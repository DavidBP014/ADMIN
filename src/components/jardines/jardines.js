import React, { useState } from 'react';
import './jardines.css';

function Jardines() {
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        cantidadNinos: ''
    });
    const [alertMessage, setAlertMessage] = useState(''); // Estado para manejar el mensaje de alerta

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

        // Establecer mensajes de alerta según el botón presionado
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
        <div className="jardines-form-container">
            {alertMessage && <div className="alert">{alertMessage}</div>} {/* Mostrar el mensaje de alerta si existe */}
            <form>
                <label htmlFor="nombre">NOMBRE</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />

                <label htmlFor="direccion">DIRECCION</label>
                <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} />

                <label htmlFor="cantidadNinos">CANTIDAD NIÑOS</label>
                <input type="number" id="cantidadNinos" name="cantidadNinos" value={formData.cantidadNinos} onChange={handleChange} />

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

export default Jardines;
