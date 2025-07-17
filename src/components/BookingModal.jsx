import React, { useState } from 'react';
import '../styles/style.css';

export default function BookingModal({ car, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        city: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking confirmed for ${car.title}!`);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Book {car.title}</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
                    <input type="date" name="date" required onChange={handleChange} />
                    <input type="text" name="city" placeholder="Pickup City" required onChange={handleChange} />
                    <div className="modal-buttons">
                        <button type="submit">Confirm Booking</button>
                        <button type="button" className="cancel" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
