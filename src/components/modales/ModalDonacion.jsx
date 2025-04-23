import React from 'react';
import './Modal.scss';
import bp from '../../assets/img/logo-bp.png';
function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <h2>Información de la Cuenta Bancaria</h2>
        <p>Por favor, realiza tu donación utilizando los siguientes detalles:</p>
        <ul>
          <li><img src={bp} alt="Banco Pichincha" /></li>
          <li><strong>Banco:</strong> Banco Pichincha</li>
          <li><strong>Cuenta:</strong> Corriente </li>
          <li><strong>N°:</strong> 2100276630</li>
        </ul>
        <p>Gracias por tu apoyo. Juntos podemos hacer un cambio.</p>
        {children}
        <button className="modal-close-btn" onClick={closeModal}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
