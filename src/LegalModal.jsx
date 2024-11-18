import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom
import './index.css';

const LegalModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-labelledby="modalTitle" aria-hidden={!isOpen}>
      <div className="modal-content">
        <h2 id="modalTitle">Terms & Conditions</h2>
        
        <p><strong>Privacy & Data Regulations</strong></p>
       
        <p>
          By booking a room with us, you agree to our <a href="/privacy-policy">Privacy Policy</a> which details how we collect, use, and protect your information.
        </p>

        <p><strong>PayPal Transaction Regulations</strong></p>
        <p>
          Payments are securely processed through PayPal. All financial information, including credit card numbers, is handled directly by PayPal. By proceeding with the payment, you agree to PayPal's Terms of Service, which can be reviewed at <a href="https://www.paypal.com/us/webapps/mpp/ua/useragreement-full" target="_blank" rel="noopener noreferrer">PayPal User Agreement</a>.
        </p>

        <div className="modal-buttons">
          <button onClick={closeModal}>Close</button>
          
        
          <Link to="/login">
            <button onClick={closeModal}>Proceed with Booking</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
