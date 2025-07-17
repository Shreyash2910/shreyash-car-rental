import React from 'react';
import CarCard from '../components/CarCard';

// Import all images
import swift from '../assets/images/swift.jpg';
import brezza from '../assets/images/brezza.jpg';
import innova from '../assets/images/innova.jpg';
import fortuner from '../assets/images/fortuner.jpg';
import alto from '../assets/images/alto.jpg';
import wagonr from '../assets/images/wagonr.jpg';

const allCars = [
    { title: 'Swift', desc: 'Fuel-efficient city hatchback.', image: swift, price: 1200 },
    { title: 'Brezza', desc: 'Compact SUV perfect for trips.', image: brezza, price: 1800 },
    { title: 'Innova Crysta', desc: 'Spacious MPV for family or group.', image: innova, price: 2500 },
    { title: 'Toyota Fortuner', desc: 'Premium SUV with commanding presence.', image: fortuner, price: 4200 },
    { title: 'Alto 800', desc: "India's favorite budget car.", image: alto, price: 800 },
    { title: 'WagonR', desc: 'Tall-boy design and roomy.', image: wagonr, price: 1000 }
];

export default function Home() {
    return (
        <section className="products">
            <h2>All Available Cars</h2>
            <div className="product-grid">
                {allCars.map((car, index) => (
                    <CarCard key={index} {...car} />
                ))}
            </div>
        </section>
    );
}
