import React from 'react';
import CarCategory from '../components/CarCategory';
import fortuner from '../assets/images/fortuner.jpg';

const cars = [
    { title: 'Toyota Fortuner', desc: 'Premium SUV with commanding presence.', image: fortuner, price: 4200 }
];

export default function LuxuryCars() {
    return <CarCategory title="Luxury Cars" cars={cars} />;
}
