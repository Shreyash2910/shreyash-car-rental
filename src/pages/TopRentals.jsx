import React from 'react';
import CarCategory from '../components/CarCategory';
import swift from '../assets/images/swift.jpg';
import brezza from '../assets/images/brezza.jpg';
import innova from '../assets/images/innova.jpg';

const cars = [
    { title: 'Swift', desc: 'Fuel-efficient city hatchback.', image: swift, price: 1200 },
    { title: 'Brezza', desc: 'Compact SUV perfect for trips.', image: brezza, price: 1800 },
    { title: 'Innova Crysta', desc: 'Spacious MPV for family or group.', image: innova, price: 2500 }
];

export default function TopRentals() {
    return <CarCategory title="Top Rentals" cars={cars} />;
}
