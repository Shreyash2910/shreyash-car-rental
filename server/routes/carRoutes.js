const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// GET all cars
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new car
router.post('/', async (req, res) => {
    const { title, desc, price, image } = req.body;

    try {
        const newCar = new Car({ title, desc, price, image });
        await newCar.save();
        res.status(201).json(newCar);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
