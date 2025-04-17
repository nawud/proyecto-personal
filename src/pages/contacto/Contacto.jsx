import React, { useState } from "react";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
    politicaPrivacidad: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.politicaPrivacidad) {
      alert("Debes aceptar la política de privacidad.");
      return;
    }
    
    setIsSubmitting(true);
    
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Mensaje enviado:", data);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          nombre: "",
          email: "",
          asunto: "",
          mensaje: "",
          politicaPrivacidad: false,
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al enviar el mensaje.");
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contacto-section">
      <div className="contacto-container container mx-auto">
        <h2 className="contacto-title">CONTACTO</h2>
        
        {submitSuccess && (
          <div className="form-success max-w-lg mx-auto mb-6">
            ¡Gracias por tu mensaje! Te responderemos lo antes posible.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="contacto-form max-w-lg mx-auto">
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="asunto" className="form-label">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              className="form-textarea"
              required
            ></textarea>
          </div>
          
          <div className="privacy-checkbox">
            <label className="checkbox-container">
              <input
                type="checkbox"
                name="politicaPrivacidad"
                checked={formData.politicaPrivacidad}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-label">
                Acepto la <a href="/politica-privacidad">política de privacidad</a>.
              </span>
            </label>
          </div>
          
          <button
            type="submit"
            className={`submit-button ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;