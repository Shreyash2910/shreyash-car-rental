import React from 'react';
import CarCategory from '../components/CarCategory';
import alto from '../assets/images/alto.jpg';
import wagonr from '../assets/images/wagonr.jpg';

const cars = [
    { title: 'Alto 800', desc: 'India\'s favorite budget car.', image: alto, price: 800 },
    { title: 'WagonR', desc: 'Tall-boy design and roomy.', image: wagonr, price: 1000 }
];

export default function AffordableCars() {
    return <CarCategory title="Affordable Hatchbacks" cars={cars} />;
}
