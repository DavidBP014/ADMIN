import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import UserForm from './components/users/userform.js'; // Nombre del archivo todo en minúsculas
import Jardines from './components/jardines/jardines.js'; // Nombre del archivo todo en minúsculas
import BlogForm from './components/blog/BlogForm.js'; 
import ContactForm from './components/contactos/ContactForm.js'; // Nombre correcto de la carpeta 'contactos'
import EventForm from './components/eventos/EventForm.js'; 

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/jardines" element={<Jardines />} />
          <Route path="/blog" element={<BlogForm />} />
          <Route path="/contacto" element={<ContactForm />} />
          <Route path="/evento" element={<EventForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
