import './devextreme.lic.js';  // Importa el archivo de licencia
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'devextreme/dist/css/dx.light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

// Importa la localización de DevExtreme
import { loadMessages, locale } from 'devextreme/localization';
import esMessages from 'devextreme/localization/messages/es.json';

// Cargar mensajes en español
loadMessages(esMessages);

// Configurar la localización a español
locale('es');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
