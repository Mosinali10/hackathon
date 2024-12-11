document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    // Post review to backend
    fetch('http://localhost:3000/api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            service_provider_id: '12345', // Replace with dynamic ID if necessary
            user_name: name,
            rating: rating,
            review: review,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
            loadReviews(); // Reload reviews
        });
});

// Fetch and display reviews
function loadReviews() {
    fetch('http://localhost:3000/api/reviews')
        .then((response) => response.json())
        .then((data) => {
            const reviewsContainer = document.getElementById('reviews');
            reviewsContainer.innerHTML = '';

            data.forEach((r) => {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'review';

                reviewDiv.innerHTML = `
                    <h4>${r.user_name} - ${r.rating}/5</h4>
                    <p>${r.review}</p>
                    <small>${new Date(r.date).toLocaleDateString()}</small>
                `;

                reviewsContainer.appendChild(reviewDiv);
            });
        });
}

// Load reviews on page load
loadReviews();
