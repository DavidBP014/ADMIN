import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'; // La ruta debe ser relativa al lugar donde tienes tu componente App

ReactDOM.render(
  <React.StrictMode>
    {/* <MyProvider> Esto sería si estás usando un contexto o proveedor de estado */}
      <App />
    {/* </MyProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
