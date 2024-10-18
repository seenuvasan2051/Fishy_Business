// import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Us</h2>

            {/* Instagram Section */}
            <div className="contact-item">
                <i className="fab fa-instagram"></i> {/* Instagram icon */}
                <a href="https://www.instagram.com/_fishy_business__" target="_blank" rel="noopener noreferrer">
                    _fishy_business__
                </a>
            </div>

            {/* Phone Number Section */}
            <div className="contact-item">
                <i className="fas fa-phone"></i> {/* Phone icon */}
                <span>+91 9901371124</span>
            </div>

            {/* WhatsApp Section */}
            <div className="contact-item">
                <i className="fab fa-whatsapp"></i> {/* WhatsApp icon */}
                <a href="https://wa.me/919901371124" target="_blank" rel="noopener noreferrer">
                    +91 9901371124
                </a>
            </div>
        </div>
    );
};

export default Contact;
