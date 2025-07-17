import React from 'react';
import CarCard from './CarCard';

export default function CarCategory({ title, cars }) {
    return (
        <section className="products">
            <h2>{title}</h2>
            <div className="product-grid">
                {cars.map((car, index) => (
                    <CarCard key={index} {...car} />
                ))}
            </div>
        </section>
    );
}
