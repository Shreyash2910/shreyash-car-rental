import React, { useState } from 'react';
import BookingModal from './BookingModal';

export default function CarCard({ title, desc, image, price }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="product">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <p><strong>₹{price}/day</strong></p>
            <button onClick={() => setShowModal(true)}>Rent Now</button>

            {showModal && (
                <BookingModal
                    car={{ title, price }}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}
