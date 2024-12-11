document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;

    const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
        amount: amount * 100, // Amount in paise (100 paise = 1 INR)
        currency: "INR", // Set the currency, can be changed as needed
        name: "Your Company Name",
        description: "Payment for Services",
        image: "https://your-logo-url.com", // Optional logo
        handler: function (response) {
            alert("Payment successful! Razorpay Payment ID: " + response.razorpay_payment_id);
            // Optional: You can generate an invoice or store the payment details
        },
        prefill: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value
        },
        theme: {
            color: "#F37254"
        }
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
});
