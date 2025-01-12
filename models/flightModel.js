import mongoose from 'mongoose';

const flightSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    flightNo: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: String,
    departure: String,
    arrival: String,
    price: Number,
    seats: Number,
});

const FlightModel = mongoose.model('FlightModel', flightSchema);

export default FlightModel;



const sampleFlights = [
    {
        name: "Airline A",
        flightNo: "AA123",
        from: "New York (JFK)",
        to: "Los Angeles (LAX)",
        departure: "2025-01-15T10:00:00Z",
        arrival: "2025-01-15T14:00:00Z",
        price: 350.99,
        seats: 150,
        date: "2025-01-08T12:00:00Z"
    },
    {
        name: "Airline B",
        flightNo: "BB456",
        from: "Chicago (ORD)",
        to: "Miami (MIA)",
        departure: "2025-01-20T08:00:00Z",
        arrival: "2025-01-20T12:00:00Z",
        price: 200.5,
        seats: 200,
        date: "2025-01-08T12:00:00Z"
    },
    {
        name: "Airline C",
        flightNo: "CC789",
        from: "San Francisco (SFO)",
        to: "Seattle (SEA)",
        departure: "2025-01-18T15:00:00Z",
        arrival: "2025-01-18T17:00:00Z",
        price: 120.0,
        seats: 100,
        date: "2025-01-08T12:00:00Z"
    },
];