// Geolocation API to get user's location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log("User's Location: Latitude: " + latitude + ", Longitude: " + longitude);
        },
        function (error) {
            if (error.code === 1) {
                alert("Location access denied by the user.");
            } else if (error.code === 2) {
                alert("Unable to retrieve your location. Please ensure your device has location access and try again.");
            } else {
                alert("An unknown error occurred.");
            }
        }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}

// Function to find nearby service providers
function findNearby(serviceType) {
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=";
    const query = encodeURIComponent(serviceType + " near me");

    // Open the search in a new tab
    window.open(googleMapsUrl + query, "_blank");
}

// Razorpay Payment Integration
document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;

    const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "Your Company Name",
        description: "Payment for Services",
        image: "https://your-logo-url.com", // Optional logo
        handler: function (response) {
            alert("Payment successful! Razorpay Payment ID: " + response.razorpay_payment_id);

            // Generate an invoice after payment success
            generateInvoice(response, amount);
        },
        prefill: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
        },
        theme: {
            color: "#F37254",
        },
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
});

// Function to generate an invoice using jsPDF
function generateInvoice(paymentDetails, amount) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Invoice", 20, 20);
    doc.text(`Payment ID: ${paymentDetails.razorpay_payment_id}`, 20, 30);
    doc.text(`Amount Paid: ₹${amount}`, 20, 40);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);

    // Download the PDF
    doc.save("invoice.pdf");
}
