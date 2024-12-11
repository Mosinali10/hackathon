const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors());

// Simulated payment processing endpoint
app.post('/api/process-payment', (req, res) => {
    const { name, email, amount } = req.body;

    // Simulate success or failure based on random logic (for demonstration)
    const success = Math.random() > 0.5; // 50% chance of success

    if (success) {
        // Simulate a successful transaction
        res.json({
            status: 'success',
            transaction_id: 'TXN123456789',
            message: 'Payment Successful!',
        });
    } else {
        // Simulate a failed transaction
        res.json({
            status: 'failure',
            message: 'Payment Failed. Please try again.',
        });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Payment simulation API running on http://localhost:3000');
});
