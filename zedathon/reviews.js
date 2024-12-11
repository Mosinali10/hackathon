const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Mock database
let reviews = [];

// Endpoint to submit a review
app.post('/api/reviews', (req, res) => {
    const { service_provider_id, user_name, rating, review } = req.body;

    const newReview = {
        service_provider_id,
        user_name,
        rating,
        review,
        date: new Date().toISOString(),
    };

    reviews.push(newReview);
    res.json({ message: 'Review submitted successfully!', review: newReview });
});

// Endpoint to fetch reviews
app.get('/api/reviews', (req, res) => {
    res.json(reviews);
});

// Start the server
app.listen(3000, () => {
    console.log('Review system running on http://localhost:3000');
});
